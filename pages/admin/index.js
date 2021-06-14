import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../../auth/AuthContext'
import LayoutAdmin from '../../components/Layout/LayoutAdmin'
import NavAdmin from '../../components/Layout/NavAdmin'

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
    <LayoutAdmin>
      <NavAdmin />
    </LayoutAdmin>
  )
}

export default Admin
