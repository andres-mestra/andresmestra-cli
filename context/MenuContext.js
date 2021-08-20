import { createContext, useState } from 'react'

export const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return (
    <MenuContext.Provider value={{ active, handleActive }}>
      {children}
    </MenuContext.Provider>
  )
}
