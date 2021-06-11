import React from 'react';

import App from '../App';

import { TabContextProvider } from '../../context/TabContext';

const AppBootstrap = () => (
  <TabContextProvider>
    <App />
  </TabContextProvider>
);

export default AppBootstrap;
