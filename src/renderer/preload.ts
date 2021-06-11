/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge , ipcRenderer, IpcRendererEvent } from 'electron';

import { Data, Type } from '../types/ContextMenu';
import { ContextMenuChannel, ContextInitialData } from '../types/IPCChannels';
import { NewWindowInitialData } from '../types/Store';

contextBridge.exposeInMainWorld(
  'AppRuntime', {
    openContextMenu: (type: Type, data?: Data) => {
      ipcRenderer.send(ContextMenuChannel[type], data);
    },
    onLoadNewWindowInitialData: (listener: (data: NewWindowInitialData) => void) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const subscription = (event: IpcRendererEvent, data: NewWindowInitialData) => listener(data);

      ipcRenderer.on(ContextInitialData.loadNewWindowInitialData, subscription);

      return () => {
        ipcRenderer.removeListener(ContextInitialData.loadNewWindowInitialData, subscription);
      };
    },
    crashWindow: () => process.crash(),
    hangWindow: () => process.hang()
  }
);
