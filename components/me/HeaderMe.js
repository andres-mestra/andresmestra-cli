import React from 'react'
import { Perfil } from './Perfil'
import { Presentation } from './Presentation'

export const HeaderMe = () => {
  return (
    <>
      <section className="container_grid">
        <div className="header__me">
          <Presentation />
          <Perfil />
        </div>
      </section>
      <style jsx>{`
        .header__me {
          background-image: linear-gradient(
            to left top,
            #e7e9ed,
            #ecedf0,
            #f1f2f4,
            #f6f6f7,
            #fbfbfb
          );
          grid-column: center-start / center-end;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-flow: column;
        }
      `}</style>
    </>
  )
}
