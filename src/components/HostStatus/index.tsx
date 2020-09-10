import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import { getStatusData } from '../../services/status';
import { StatusData } from '../../types/statusTypes';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import COLUMNS from '../../style/theme/COLUMNS';
import { SITE_CONSTANTS } from '../../constants';
import FailIcon from '../images/FailIcon';
import SuccessIcon from '../images/SuccessIcon';
import { RowStyle } from '../../style/inline';


interface ColorProps {
  readonly success: boolean | null
}

interface Props {
  apiName: string
}

const ColWrap = styled.div<ColorProps>`
  color: ${props => props.success ? props.theme.colors.primary : props.theme.colors.secondary};
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HostStatus: React.FC<Props> = ({ apiName }) => {
  const [statusData, setStatusData] = useState<StatusData | null>(null);

  // initial request
  useEffect(() => {
    async function getInitialData() {
      const status = await getStatusData(apiName);
      setStatusData(status);
    }
    getInitialData();
  }, [])

  // subsequent requests
  useInterval(async () => {
    const status = await getStatusData(apiName);
    setStatusData(status);
  }, SITE_CONSTANTS.DEFAULT_INTERVAL);

  const humanDate = statusData && statusData.time && new Date(statusData.time).toISOString();
  const success = statusData && statusData.success;
  return (
    <>
      {
        statusData &&
        <Row style={RowStyle}>
          <Col {...COLUMNS.content}>
            <ColWrap success={success}>
              {statusData.hostname}
            </ColWrap>
          </Col>
          <Col {...COLUMNS.content}>
            <ColWrap success={success}>
              {statusData.success ? <SuccessIcon /> : <FailIcon />}
            </ColWrap>
          </Col>
          <Col {...COLUMNS.content}>
            <ColWrap success={success}>
              {statusData.message}
            </ColWrap>
          </Col>
          <Col {...COLUMNS.content}>
            <ColWrap success={success}>
              {humanDate}
            </ColWrap>
          </Col>
        </Row>
      }
    </>
  );
}

export default HostStatus;
