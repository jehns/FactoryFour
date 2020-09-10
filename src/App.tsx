import React from 'react';
import { ThemeProvider } from 'styled-components';
import HostStatus from './components/HostStatus';
import { SITE_CONSTANTS } from './constants'
import theme from './style/theme';
import GlobalStyle from './style/global';
import { Grid } from 'react-styled-flexboxgrid';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <div className="App-body">
          <h2>Status Page</h2>
          <Grid>
          {
            SITE_CONSTANTS.API_NAMES.map((apiName) => {
              return (
                <HostStatus key={apiName} apiName={apiName} />
              )
            })
          }
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
