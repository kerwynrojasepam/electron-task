import { NewWindowInitialData, StoreKeys } from '../types/Store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store = new Map<StoreKeys, any>();

export const setRecentlyOpenedTab = (tabIndex: number) => {
  store.set(StoreKeys.RECENTLY_OPENED_TAB, tabIndex);
};

export const getNewWindowInitialData = (): NewWindowInitialData => ({ [StoreKeys.RECENTLY_OPENED_TAB]: store.get(StoreKeys.RECENTLY_OPENED_TAB) });

export const clearNewWindowInitialData = () => {
  store.delete(StoreKeys.RECENTLY_OPENED_TAB);
};
