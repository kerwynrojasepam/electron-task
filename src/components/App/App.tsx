import React from 'react';

import AppBar from '../AppBar';
import Content from '../Content';
import TabBar from '../TabBar';

import { TabContextProvider } from '../../context/TabContext';

const App = () => (
  <TabContextProvider>
    <AppBar />
    <TabBar />
    <Content />
  </TabContextProvider>
);

export default App;
