import { BrowserWindow } from 'electron';

import { ContextInitialData } from '../types/IPCChannels';
import { clearNewWindowInitialData, getNewWindowInitialData } from './store';

// This allows TypeScript to pick up the magic constant that's auto-generated by Forge's Webpack
// plugin that tells the Electron app where to look for the Webpack-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const createWindow = async () => {
  const newWindow = new BrowserWindow({
    show: false,
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
    }
  });
  newWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  newWindow.webContents.on('did-finish-load', () => {
    newWindow.show();
    newWindow.focus();

    const initialData = getNewWindowInitialData();
    clearNewWindowInitialData();
    newWindow.webContents.send(ContextInitialData.loadNewWindowInitialData, initialData);
  });

  // Open the DevTools.
  newWindow.webContents.openDevTools();

  return newWindow;
};

export default createWindow;