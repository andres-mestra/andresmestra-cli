import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)

  return { ...context }
}
