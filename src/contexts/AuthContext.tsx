import { createContext, useContext, useMemo, useState } from "react";
import { v4 as uuid } from "uuid"

export interface AuthContextProps {
  customerId: string
}

export const AuthContext = createContext<AuthContextProps>({
  customerId: ''
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: any) => {
  const storedId = localStorage.getItem('customerId') ?? ''
  const [customerId, setCustomerId] = useState(storedId)
  
  if (!storedId) {
    const newId = uuid()
    localStorage.setItem('customerId', customerId)
    setCustomerId(newId)
  }

  const value = useMemo(() => ({ customerId }), [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
