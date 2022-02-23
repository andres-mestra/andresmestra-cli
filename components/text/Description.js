import React from 'react'

export const Description = ({ children }) => {
  return (
    <>
      <p>{children}</p>
      <style jsx>{`
        p {
          font-size: 1.5rem;
          text-align: justify;
          max-width: 70ch;
        }
      `}</style>
    </>
  )
}
