import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import AllActions from "../all-actions/AllActions";
import Projects from "../projects/Projects";
import './GetInspirations.scss';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function GetInspirations() {
  const [tabValue, setTabValue] = useState(0);
  return (
    <div className="get-inspirations">
      <h2>Get Inspirations</h2>
      <Tabs
        value={tabValue}
        onChange={(event, newValue) => {
          setTabValue(newValue);
        }}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="inspirations tabs"
      >
        <Tab label="See others actions" {...a11yProps(0)} />
        <Tab label="See ongoing projects" {...a11yProps(1)} />
      </Tabs>
      { tabValue === 0 ? <AllActions /> : <Projects /> }
    </div>
  );
}

export default GetInspirations;