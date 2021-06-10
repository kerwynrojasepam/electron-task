import React from 'react';

import AppBar from '../AppBar';
import Content from '../Content';

import { TabContextProvider } from '../../context/TabContext';

const App = () => (
  <TabContextProvider>
    <AppBar />
    <Content />
  </TabContextProvider>
);

export default App;
