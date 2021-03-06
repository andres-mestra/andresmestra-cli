import NavAdmin from '../../components/Layout/NavAdmin'
import { AuthProvider } from '../../auth/AuthContext'

const LayoutAdmin = ({ children }) => {
  return (
    <AuthProvider>
      <main className="container">
        <NavAdmin />
        {children}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: minmax(min-content, 25rem) 1fr;
            grid-template-rows: 100vh;
          }
        `}</style>
      </main>
    </AuthProvider>
  )
}

export default LayoutAdmin
