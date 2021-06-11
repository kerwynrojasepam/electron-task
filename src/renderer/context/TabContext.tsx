import React, { Dispatch, SetStateAction, PropsWithChildren, createContext, useState } from 'react';

export type TabContextStateType = {
  selectedTabIndex: number;
};

const INITIAL_STATE: TabContextStateType = {
  selectedTabIndex: 0
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TabContext = createContext<[TabContextStateType, Dispatch<SetStateAction<TabContextStateType>>]>([] as any);

export const TabContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const value = useState(INITIAL_STATE);

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export default TabContext;
