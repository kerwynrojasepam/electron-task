import { ipcMain, BrowserWindow, IpcMainEvent, Menu, MenuItemConstructorOptions, WebContents } from 'electron';

import { Channel } from '../types/ContextMenu';

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
    alert('New window');
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

const contextMenuHandler = (menu: Menu, webContents: WebContents, event: Event) => {
  event.preventDefault();
  menu.popup({ window: BrowserWindow.fromWebContents(webContents) });
};

export const generateContextMenus = () => {
  const tabMenu = getMenu();

  //Webview is being shown here as a window type
  ipcMain.on(Channel.tab, (event: IpcMainEvent) => {
    contextMenuHandler(tabMenu, event.sender, event);
  });
};
