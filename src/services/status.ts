import axios from 'axios'

interface DataObject {
  success: boolean,
  message: string,
  hostname: string,
  time: number
}

export const getStatus = async (apiName: string): Promise<DataObject> => {
  const status = await axios.get(`https://api.factoryfour.com/${apiName}/health/status`)
  return status.data
}
