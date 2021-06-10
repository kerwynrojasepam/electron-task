export {};

import { Type } from '../types/ContextMenu';

declare global {
  interface Window {
    AppContextMenu: {
      openContextMenu: (type: Type) => void;
    };
  }
}
