import axios from "axios";
import { createContext, useContext, useMemo } from "react";
import { useQuery } from "react-query";

export const HomePageContext = createContext<any>({})

export const useHomePage = () => useContext(HomePageContext)

export const HomePageContextProvider = ({ children }: any) => {
  const { data } = useQuery('homeProducts', async () => {
    const response = await axios.get('https://cupcake.cyclic.app/api/featured')
    return response.data
  })

  const value = useMemo(() => ({ products: data }), [data])

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  )
}

