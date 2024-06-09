import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext  from '@mui/lab/TabContext';
import  TabList  from '@mui/lab/TabList';
import TabPanel  from '@mui/lab/TabPanel';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <TabList onChange={handleChange} aria-label="lab API tabs example">
      <Tab label="Item One" value="1" />
      <Tab label="Item Two" value="2" />
      <Tab label="Item Three" value="3" />
    </TabList>
  </Box>
  <TabPanel value="1">Item One</TabPanel>
  <TabPanel value="2">Item Two</TabPanel>
  <TabPanel value="3">Item Three</TabPanel>
</TabContext>
  );
}

export default FullWidthTabs;