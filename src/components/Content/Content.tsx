
import React from 'react';
import Typography from '@material-ui/core/Typography';

import useTabContext from '../../hooks/useTabContext';

import { TABS } from '../../constants/Menu';

const Content = () => {
  const [{ selectedTabIndex }] = useTabContext();

  return (
    <Typography>{TABS[selectedTabIndex]}</Typography>
  );
};

export default Content;
