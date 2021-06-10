import { MouseEventHandler } from 'react';

import { Type } from '../../types/ContextMenu';

export const getContextMenuClickHandler = (type: Type) => (e: MouseEvent | MouseEventHandler) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e as any)?.preventDefault();
  window.AppContextMenu.openContextMenu(type);
};
