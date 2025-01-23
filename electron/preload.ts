const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("navigationApi", {
  openScriptWindow: () => ipcRenderer.send("open-script-window"),
});