import { createContext, useContext, useMemo, useState } from "react";
import { v4 as uuid } from "uuid"

export interface AuthContextProps {
  customerId: string
  signIn(): void
  signOut(): void
}

export const AuthContext = createContext<AuthContextProps>({
  customerId: '',
  signIn: () => null,
  signOut: () => null
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: any) => {
  const [customerId, setCustomerId] = useState<string>('')

  function signIn() {
    setCustomerId('b949827c-2952-408c-968e-670bed72cc46')
  }

  function signOut() {
    setCustomerId('')
  }

  if (!customerId) {
    const storedId = localStorage.getItem('customerId') ?? ''
    
    if (!storedId) {
      const newId = uuid()
      localStorage.setItem('customerId', newId)
      setCustomerId(newId)
    }
  }  

  const value = useMemo(() => ({
    customerId,
    signIn,
    signOut
  }), [customerId])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
