import React, { useState, useEffect } from 'react';
import useInterval from '../hooks/useInterval';
import { getStatus } from '../services/status'
import { StatusData } from '../types/statusTypes'

interface Props {
  apiName: string
}

const HostStatus: React.FC<Props> = ({ apiName }) => {
  let [status, setStatus] = useState<StatusData | null>(null);

  // initial request
  useEffect(() => {
    async function getInitialData() {
      const status = await getStatus(apiName);
      setStatus(status);
    }
    getInitialData();
  }, [])

  // subsequent requests
  useInterval(async () => {
    const status = await getStatus(apiName);
    setStatus(status);
  }, 10000);

  return (
    <div>
      {apiName}: {status && status.hostname} {status && status.success ? "true" : "false"}
    </div>
  );
}

export default HostStatus;
