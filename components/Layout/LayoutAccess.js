import React from 'react'

const LayoutAccess = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          background-color: var(--grey-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default LayoutAccess
