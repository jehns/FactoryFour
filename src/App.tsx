import React from 'react';
import { ThemeProvider } from 'styled-components';
import HostStatus from './components/HostStatus';
import { SITE_CONSTANTS } from './constants'
import theme from './style/theme';
import GlobalStyle from './style/global';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import COLUMNS from './style/theme/COLUMNS';
import { RowStyle } from './style/inline'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <div className="App-body">
          <h1>FactoryFour Status Page</h1>
          <Grid>
            <Row style={{...RowStyle, padding: "5px 0"}}>
              <Col {...COLUMNS.content}>
                Host / Hostname
              </Col>
              <Col {...COLUMNS.content}>
                Status
              </Col>
              <Col {...COLUMNS.content}>
                Message
              </Col>
              <Col {...COLUMNS.content}>
                Date
              </Col>
            </Row>
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
