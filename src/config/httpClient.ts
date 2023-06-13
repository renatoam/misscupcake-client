import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1'
})

instance.interceptors.request.use(config => {
  console.log('[token]: ', config.headers.Authorization ?? 'No auth configured.')

  return config
})

instance.interceptors.response.use(config => {
  return config
}, errorConfig => {
  return {
    status: errorConfig.response.status,
    message: errorConfig.response.data.message
  }
})

export default instance
