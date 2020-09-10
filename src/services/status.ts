import axios from './axios'
import { StatusData } from '../types/statusTypes'

export const getStatusData = async (apiName: string): Promise<StatusData> => {
  try {
    const status = await axios.get(`/${apiName}/health/status/`)
    return status.data
  } catch (error) {
    return {success: false, message: error.message, hostname: apiName, time: Date.now()}
  }
}
