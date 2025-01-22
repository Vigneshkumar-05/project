const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow: typeof BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    webPreference: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  try {
    if (!mainWindow) {
      throw "Main window is null";
    }

    // update build directory
    const startURL = process.env.isDev
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "..build-dir")}`;
    mainWindow.loadURL(startURL);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.once("ready-to-show", () => {
      mainWindow.show();
      mainWindow.maximize();
    });

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  } catch (err) {
    console.log(err);
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
