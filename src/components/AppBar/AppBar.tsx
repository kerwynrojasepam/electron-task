import useStyles from './AppBar.styles';

import React from 'react';
import AppBarBase from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SearchIcon from '@material-ui/icons/Search';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const AppBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBarBase elevation={0} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4">
            APP
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <div>
            <HelpRoundedIcon className={classes.icon} />
            <SettingsRoundedIcon className={classes.icon} />
            <PersonRoundedIcon className={classes.icon} />
          </div>
        </Toolbar>
      </AppBarBase>
    </div>
  );
};

export default AppBar;
