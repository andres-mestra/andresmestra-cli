import { createContext } from 'react'
import { useQuery } from '@apollo/client'
import { ME } from '../queries/authQueries'

/* {
  loading: true,
  error: null,
  auth: {
    id: null,
    username: null,
    email: null,
    role: null,
  }
} */

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { data, loading, error } = useQuery(ME)
  const auth = data?.me ? { ...data.me } : null

  return (
    <AuthContext.Provider value={{ loading, error, auth }}>
      {children}
    </AuthContext.Provider>
  )
}
