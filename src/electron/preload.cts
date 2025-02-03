const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  setUp: () => console.log("Communication set up completed")
});