import { createContext } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter, withRouter } from 'next/router'

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
  const router = useRouter()
  const { loading, error, data } = useQuery(ME)
  const auth = data?.me ?? false

  if (loading) return <p>loading...</p>

  if (!auth || error?.message) {
    router.replace('/')
    return <p>Redirecting...</p>
  }

  return (
    <AuthContext.Provider value={{ auth, loading, error }}>
      {children}
    </AuthContext.Provider>
  )
}
