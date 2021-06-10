import { contextBridge , ipcRenderer } from 'electron';

import { Channel, Type } from '../types/ContextMenu';

contextBridge.exposeInMainWorld(
  'AppContextMenu',
  {
    openContextMenu: (type: Type) => {
      ipcRenderer.send(Channel[type]);
    }
  }
);
