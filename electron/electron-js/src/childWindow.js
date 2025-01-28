"use strict";
function childWindow(parentWindow) {
    const { BrowserWindow, app } = require('electron');
    let childWindow = null;
    function createChildWindow() {
        childWindow = new BrowserWindow({
            width: 600,
            height: 600,
            focus: true,
            parent: parentWindow,
            name: "childWindow",
            minimizable: false,
        });
        childWindow.loadURL("https://google.com");
        childWindow.once("ready-to-show", () => {
            childWindow.show();
        });
        childWindow.on("closed", () => {
            childWindow = null;
        });
    }
    app.whenReady().then(() => {
        createChildWindow();
        app.on("activate", () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createChildWindow();
            }
        });
    });
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit();
        }
    });
}
module.exports = childWindow;
