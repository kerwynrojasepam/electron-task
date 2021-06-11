import { MouseEventHandler } from 'react';

import AppRuntime from './AppRuntime';

import { Data, Type } from '../../types/ContextMenu';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getContextMenuClickHandler = (type: Type) => (e: MouseEvent | MouseEventHandler, data?: Data) => {
  (e as MouseEvent)?.preventDefault();
  (e as MouseEvent)?.stopPropagation();
  AppRuntime.openContextMenu(type, data);
};
