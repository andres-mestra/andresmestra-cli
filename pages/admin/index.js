import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../../auth/AuthContext'
//import Dashboard from '../../components/editor/Dashboard'

const Admin = () => {
  const router = useRouter()
  const { loading, error, auth } = useContext(AuthContext)

  if (loading) {
    return <p>...loadin</p>
  }

  if (!auth || error?.message) {
    router.replace('/')
  }

  return <>Index</>
}

Admin.layout = 'ADMIN'
export default Admin
