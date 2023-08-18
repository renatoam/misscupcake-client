import { QueryClient } from "react-query";

export const queryClient = new QueryClient()

export const API_URL = import.meta.env.NODE_ENV === 'production' ?
  import.meta.env.VITE_API_BASE_URL :
  import.meta.env.VITE_API_LOCAL_BASE_URL
