import useStyles from './AppBar.styles';

import React from 'react';
import AppBarBase from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SearchIcon from '@material-ui/icons/Search';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import TabBar from '../TabBar';

const AppBar = () => {
  const classes = useStyles();

  return (
    <AppBarBase elevation={0} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4">
          APP
        </Typography>
        <Box className={classes.search}>
          <InputBase
            classes={{
              root: classes.inputRoot
            }}
            fullWidth
            startAdornment={<SearchIcon />}
          />
        </Box>
        <Box>
          <IconButton color="inherit">
            <HelpRoundedIcon />
          </IconButton>
          <IconButton color="inherit">
            <SettingsRoundedIcon />
          </IconButton>
          <IconButton color="inherit">
            <PersonRoundedIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <TabBar />
    </AppBarBase>
  );
};

export default AppBar;
