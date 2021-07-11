import NavAdmin from '../../components/Layout/NavAdmin'

const LayoutAdmin = ({ children }) => {
  return (
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
  )
}

export default LayoutAdmin
