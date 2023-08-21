import httpClient from "@/config/httpClient";
import { createContext, useContext, useMemo } from "react";
import { useMutation, useQuery } from "react-query";

export const HomePageContext = createContext<any>({})

export const useHomePage = () => useContext(HomePageContext)

export const HomePageContextProvider = ({ children }: any) => {
  const { data: products } = useQuery('homeProducts', async () => {
    const response = await httpClient.get(`/products?price=lte%3A3&in_stock=eq%3Afalse`)
    return response.data
  })
  
  const { data: content } = useQuery('homeContent', async () => {
    const response = await httpClient.get(`/content/pages?name=home`)
    return response.data
  })

  const mutation = useMutation({
    mutationFn: async (data) => httpClient.patch(`/content/pages/description`, data)
  })

  const value = useMemo(() => ({ products, content, mutation }), [products, content])

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}

