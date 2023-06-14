import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid"

export interface AuthContextProps {
  guestId: string
}

export const AuthContext = createContext<AuthContextProps>({
  guestId: ''
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: any) => {
  const storedId = localStorage.getItem('guestId') ?? ''
  const [guestId, setGuestId] = useState(storedId)
  
  if (!storedId) {
    const newId = uuid()
    localStorage.setItem('guestId', guestId)
    setGuestId(newId)
  }

  const value = useMemo(() => ({ guestId }), [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
