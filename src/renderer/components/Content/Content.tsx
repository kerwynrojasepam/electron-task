import useStyles from './Content.styles';

import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useTabContext from '../../hooks/useTabContext';

import { TABS } from '../../constants/Menu';

const Content = () => {
  const classes = useStyles();
  const [{ selectedTabIndex }] = useTabContext();

  const contentText = `${TABS[selectedTabIndex]} Tab Content`;

  return (
    <Box className={classes.root} height="77vh">
      <div className={classes.toolbar} />
      <Box className={classes.content} height="100%">
        <Typography>{contentText}</Typography>
      </Box>
    </Box>
  );
};

export default Content;
