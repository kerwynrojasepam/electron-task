import React, { MouseEventHandler, useCallback } from 'react';

import Tab, { TabProps } from '@material-ui/core/Tab';

import { getContextMenuClickHandler } from '../../utils/contextMenu';
import AppRuntime from '../../utils/AppRuntime';

import { CRASH_TAB, HANG_TAB } from '../../constants/Menu';

const contextMenuClickHandler = getContextMenuClickHandler('tab');

const TabItem = ({ value, ...otherProps }: TabProps) => {
  const handleContextMenuClick = useCallback((e: MouseEventHandler) => {
    contextMenuClickHandler(e, { tabIndex: value });
  }, [value]);

  const handleClick = useCallback(() => {
    if (value === HANG_TAB) {
      AppRuntime.hangWindow();
    } else if (value === CRASH_TAB) {
      AppRuntime.crashWindow();
    }
  }, [value]);

  return (
    <Tab
      value={value}
      {...otherProps}
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onContextMenu={handleContextMenuClick as any}
    />
  );
};

export default TabItem;
