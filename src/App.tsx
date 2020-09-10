import React, { useState } from 'react';
import './App.css';
import HostStatus from './components/HostStatus';
import { SITE_CONSTANTS } from './constants'


const App = () => {
  return (
    <div className="App">
      <div className="App-body">
        <h2>Status Page</h2>
        {
          SITE_CONSTANTS.API_NAMES.map((apiName) => {
            return (
              <HostStatus key={apiName} apiName={apiName} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
