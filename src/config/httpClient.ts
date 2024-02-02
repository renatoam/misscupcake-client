import Axios from "axios";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ??
    import.meta.env.VITE_API_LOCAL_BASE_URL
})

axios.interceptors.request.use(config => {
  console.log('[token]: ', config.headers.Authorization ?? 'No auth configured.')
  console.log(config.baseURL, { config })

  return config
})

axios.interceptors.response.use(config => {
  return config
}, errorConfig => {
  return {
    status: errorConfig.response.status,
    message: errorConfig.response.data.message
  }
})

export default axios
