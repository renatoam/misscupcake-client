import { createContext, useContext, useId, useMemo } from "react";

export const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: any) => {
  const guestID = useId()

  localStorage.setItem('guestID', guestID)
  const value = useMemo(() => ({ guestID }), [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
