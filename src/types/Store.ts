export enum StoreKeys {
  RECENTLY_OPENED_TAB = 'recentlyOpenedTab'
}

export type NewWindowInitialData = {
  [StoreKeys.RECENTLY_OPENED_TAB]: number;
};
