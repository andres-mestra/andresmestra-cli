import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../../auth/AuthContext'
import { AdminProvider } from '../../context/AdminContext'
import LayoutAdmin from '../../components/Layout/LayoutAdmin'
import NavAdmin from '../../components/Layout/NavAdmin'
import Dashboard from '../../components/editor/Dashboard'

const Admin = () => {
  const router = useRouter()
  const { loading, error, auth } = useContext(AuthContext)

  if (loading) {
    return <p>...loadin</p>
  }

  if (!auth || error?.message) {
    router.replace('/')
  }

  return (
    <AdminProvider>
      <LayoutAdmin>
        <NavAdmin />
        <Dashboard />
      </LayoutAdmin>
    </AdminProvider>
  )
}

export default Admin
