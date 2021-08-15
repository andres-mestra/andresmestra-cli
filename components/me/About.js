import React from 'react'
import { Description } from '../text/Description'

import { HeaderLarge } from '../ui/headers/HeaderLarge'
import { Contacts } from './Contacts'
import { Interests } from './Interests'

export const About = () => {
  return (
    <>
      <section className="container_grid" id="about">
        <div className="about">
          <div className="about__header">
            <HeaderLarge title="Sobre mí" />
          </div>
          {/*TODO: Cambiar descripción*/}
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Description>
          <Contacts />
          <Interests />
        </div>
      </section>
      <style jsx>{`
        .about {
          background-color: var(--white);
          margin: 5rem;
          padding: 5rem;
          grid-column: center-start / center-end;
          position: relative;
          display: grid;
          grid-row-gap: 2rem;
        }

        .about::after {
          content: '';
          background-color: var(--color-palett-1);
          clip-path: polygon(0 0, 30% 0, 100% 70%, 100% 100%, 70% 100%, 0 30%);
          position: absolute;
          top: -0.3em;
          left: -0.3em;
          right: -0.3em;
          bottom: -0.3em;
          z-index: -1;
        }

        .about__header {
          text-align: center;
        }

        .about__description {
          margin-bottom: 3rem;
        }
      `}</style>
    </>
  )
}
