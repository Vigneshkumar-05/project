import { app } from "electron";
import path from "path";

export function isDev(): boolean {
    return process.env.NODE_DEV === "development";
}

export function getPreloadPath(): string {
    return path.join(app.getAppPath(), isDev() ? "." : "..", "/dist-electron/preload.cjs");
}