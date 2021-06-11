import { Data, Type } from '../../types/ContextMenu';
import { NewWindowInitialData } from '../../types/Store';

export type OnLoadWindowInitialDataListener = (data: NewWindowInitialData) => void;

interface IAppRuntime {
  openContextMenu: (type: Type, data?: Data) => void;
  onLoadNewWindowInitialData: (listener: OnLoadWindowInitialDataListener) => () => void;
  crashWindow: () => void;
  hangWindow: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppRuntime = (window as any).AppRuntime as IAppRuntime;

export default AppRuntime;
