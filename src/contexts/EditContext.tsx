import { createContext, useContext, useMemo, useState } from "react";

interface EditContextProps {
  editable: boolean,
  setEditable: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditContext = createContext<EditContextProps>({
  editable: false,
  setEditable: () => {}
})

export const useEditContext = () => useContext(EditContext)

export const EditContextProvider = ({ children }: any) => {
  const [editable, setEditable] = useState(false)

  const value = useMemo(() => ({
    editable,
    setEditable
  }), [editable, setEditable])

  return (
    <EditContext.Provider value={value}>
      {children}
    </EditContext.Provider>
  )
}
