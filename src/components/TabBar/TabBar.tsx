import useStyles from './TabBar.styles';

import React, { useCallback, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabScrollButton, { TabScrollButtonProps } from '@material-ui/core/TabScrollButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import useTabContext from '../../hooks/useTabContext';

import { TABS } from '../../constants/Menu';

const tabs = TABS.map((tabText, index) => <Tab key={index} label={tabText} />);

const TabBar = () => {
  const classes = useStyles();
  const scrollLeftProps = useRef<TabScrollButtonProps>();
  // const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const [tabContextState, setTabContextState] = useTabContext();

  const { selectedTabIndex } = tabContextState;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (event: React.ChangeEvent<Record<string, never>>, tabIndex: number) => {
    setTabContextState({ selectedTabIndex: tabIndex });
  };

  const ScrollButtons = useCallback((props: TabScrollButtonProps) => {
    const { direction } = props;

    if (direction === 'left') {
      scrollLeftProps.current = props;

      return null;
    }

    const commonProps = {
      disabled: false
    };

    return (
      <>
        <TabScrollButton {...scrollLeftProps.current as TabScrollButtonProps} {...commonProps} />
        <TabScrollButton {...props} {...commonProps} />
      </>
    );
  }, []);

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Tabs
          indicatorColor="primary"
          ScrollButtonComponent={ScrollButtons}
          scrollButtons="on"
          textColor="primary"
          value={selectedTabIndex}
          variant="scrollable"
          onChange={handleChange}
        >
          {tabs}
        </Tabs>
      </AppBar>

    </div>
  );
};

export default TabBar;
