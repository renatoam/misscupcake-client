import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.NODE_ENV !== 'production' ?
  import.meta.env.VITE_API_LOCAL_BASE_URL :
  import.meta.env.VITE_API_BASE_URL
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
