import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

import { childWindow } from "./childWindow.js";
import { isDev, getPreloadPath } from "./util.js";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1024,
    minHeight: 768,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  // update build directory
  if (isDev()) {
    mainWindow.loadURL("http://localhost:5173/");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "./dist-react/index.html"));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
    mainWindow?.maximize();
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
})
  .catch((err) => {
    console.log(err);
  })
  ;

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


// IPC
ipcMain.on("open-script-window", () => {
  if (!mainWindow) {
    throw new Error("Main window is not defined");
  }
  childWindow(mainWindow);
});