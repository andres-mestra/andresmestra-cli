import { createContext, useState } from 'react'
import { listNavEditor } from '../utils/initialStates'

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [editorNav, setEditorNav] = useState(listNavEditor)

  return (
    <AdminContext.Provider
      value={{
        editorNav,
        setEditorNav,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}
