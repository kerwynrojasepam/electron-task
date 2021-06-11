import React, { useEffect } from 'react';

import AppBar from '../AppBar';
import Content from '../Content';

import useTabContext from '../../hooks/useTabContext';

import AppRuntime from '../../utils/AppRuntime';

const App = () => {
  const [, setTabContextState] = useTabContext();

  useEffect(() => {
    const unsubscribe = AppRuntime.onLoadNewWindowInitialData(({ recentlyOpenedTab }) => {
      if (recentlyOpenedTab != null) {
        setTabContextState({ selectedTabIndex: recentlyOpenedTab });
      }
    });

    return unsubscribe;
  }, [setTabContextState]);

  return (
    <>
      <AppBar />
      <Content />
    </>
  );
};

export default App;
