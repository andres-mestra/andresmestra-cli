import React from 'react'

export const MyName = () => {
  return (
    <div>
      <h2>AndresMestra</h2>
      <style jsx>{`
        h2 {
          font-size: 2rem;
          color: var(--color-primary);
        }

        @media only screen and (max-width: 34.37rem) {
          h2 {
            font-size: 3rem;
          }
        }
      `}</style>
    </div>
  )
}
