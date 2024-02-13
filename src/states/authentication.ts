import { atom, useAtom } from "jotai";

const authAtom = atom({
  isAuthenticated: false
})

export const useAuth = () => useAtom(authAtom)
