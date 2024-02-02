import { atom, getDefaultStore } from "jotai";

const store = getDefaultStore()

export const account = atom({
  id: 'b949827c-2952-408c-968e-670bed72cc46'
})

export const getAccount = () => store.get(account)
export const setAccount = (id: string) => store.set(account, { id })
