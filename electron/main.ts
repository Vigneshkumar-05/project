const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");


const childWin = require("./src/childWindow");

let mainWindow: typeof BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  console.log(__dirname);
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

ipcMain.on("open-script-window", () => {
  if (!mainWindow) {
    throw new Error("Main window is not defined");
  }
  childWin(mainWindow);
});
