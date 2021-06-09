const LayoutAdmin = ({ children }) => {
  return (
    <>
      <main className="container">{children}</main>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: minmax(min-content, 25rem) 1fr;
          grid-template-rows: 100vh;
        }
      `}</style>
    </>
  )
}

export default LayoutAdmin
