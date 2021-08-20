import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'

export const useMenu = () => {
  const { active, handleActive } = useContext(MenuContext)

  return {
    active,
    handleActive,
  }
}
