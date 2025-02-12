import { BrowserWindow } from "electron";

export function childWindow(parentWindow: BrowserWindow) {
    const { BrowserWindow, app } = require('electron');

    let childWindow: typeof BrowserWindow | null = null;

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