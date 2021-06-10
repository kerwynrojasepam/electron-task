import { useContext } from 'react';

import TabContext from '../context/TabContext';

const useTabContext = () => useContext(TabContext);

export default useTabContext;
