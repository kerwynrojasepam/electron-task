import React, { MouseEventHandler, useCallback } from 'react';

import Tab, { TabProps } from '@material-ui/core/Tab';

import { getContextMenuClickHandler } from '../../utils/contextMenu';

const contextMenuClickHandler = getContextMenuClickHandler('tab');

const TabItem = ({ value, ...otherProps }: TabProps) => {
  const handleContextMenuClick = useCallback((e: MouseEventHandler) => {
    contextMenuClickHandler(e, { tabIndex: value });
  }, [value]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tab {...otherProps} value={value} onContextMenu={handleContextMenuClick as any} />;
};

export default TabItem;
