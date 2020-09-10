import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';
import { getStatus } from '../services/status'

interface Props {
  apiName: string
}

const HostStatus: React.FC<Props> = ({ apiName }) => {
  let [status, setStatus] = useState("failed");

  useInterval(async () => {
    const status = await getStatus(apiName);
    const success = status.success ? "success" : "failed";
    setStatus(success);
  }, 2000);

  return (
    <div>
      status: {status}
    </div>
  );
}

export default HostStatus;
