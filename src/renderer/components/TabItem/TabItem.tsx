import React from 'react';

import Tab, { TabProps } from '@material-ui/core/Tab';

import { getContextMenuClickHandler } from '../../utils/contextMenu';

const contextMenuClickHandler = getContextMenuClickHandler('tab');

const TabItem = (props: TabProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tab {...props} onContextMenu={contextMenuClickHandler as any} />;
};

export default TabItem;
