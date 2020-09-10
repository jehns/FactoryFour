import React, { useState } from 'react';
import './App.css';
import HostStatus from './components/HostStatus';

const App = () => {
  return (
    <div className="App">
      <div className="App-body">
        <h2>Status Page</h2>
        <HostStatus apiName="accounts"/>
      </div>
    </div>
  );
}

export default App;
