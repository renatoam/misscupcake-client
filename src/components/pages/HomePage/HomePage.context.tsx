import axios from "axios";
import { createContext, useContext, useMemo } from "react";
import { useMutation, useQuery } from "react-query";

export const HomePageContext = createContext<any>({})

export const useHomePage = () => useContext(HomePageContext)

export const HomePageContextProvider = ({ children }: any) => {
  const { data: products } = useQuery('homeProducts', async () => {
    const response = await axios.get('https://cupcake.cyclic.app/api/featured')
    return response.data
  })
  
  const { data: content } = useQuery('homeContent', async () => {
    const response = await axios.get('https://cupcake.cyclic.app/api/content/pages?name=home')
    return response.data
  })

  const mutation = useMutation({
    mutationFn: async (data) => axios.patch('https://cupcake.cyclic.app/api/content/pages/description', data)
  })

  const value = useMemo(() => ({ products, content, mutation }), [products, content])

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}

