import { ipcMain, BrowserWindow, IpcMainEvent, Menu, MenuItemConstructorOptions, WebContents } from 'electron';

import createWindow from '../utils/createWindow';
import * as store from '../utils/store';

import { ContextMenuChannel } from '../types/IPCChannels';
import { Data } from '../types/ContextMenu';

const setContextMenuData = (data?: Data) => {
  if (!data) {
    return;
  }

  store.setRecentlyOpenedTab(data.tabIndex);
};

const KEYBOARD_SHORTCUTS = {
  minimize: 'Alt + Space + n', // TODO: See why Space is not being shown as accelerator
  newWindow: 'Ctrl + n',
  fullScreen: 'F11',
  close: 'Ctrl + w'
};

const tabTemplateMenu: MenuItemConstructorOptions[] = [{
  role: 'minimize',
  label: 'Minimize',
  accelerator: KEYBOARD_SHORTCUTS.minimize
}, {
  label: 'New Window',
  accelerator: KEYBOARD_SHORTCUTS.newWindow.trim(),
  click: () => {
    createWindow();
  }
}, {
  label: 'Full Screen',
  role: 'togglefullscreen',
  accelerator: KEYBOARD_SHORTCUTS.fullScreen.trim()
}, {
  type: 'separator'
}, {
  // label: 'Close',
  role: 'close',
  accelerator: KEYBOARD_SHORTCUTS.close.trim()
}];

const getMenu = (): Menu => {
  return Menu.buildFromTemplate(tabTemplateMenu);
};

const contextMenuHandler = (menu: Menu, webContents: WebContents, event: Event, data?: Data) => {
  setContextMenuData(data);
  event.preventDefault();
  menu.popup({ window: BrowserWindow.fromWebContents(webContents) });
};

export const generateContextMenus = () => {
  const tabMenu = getMenu();

  //Webview is being shown here as a window type
  ipcMain.on(ContextMenuChannel.tab, (event: IpcMainEvent, data?: Data) => {
    contextMenuHandler(tabMenu, event.sender, event, data);
  });
};
