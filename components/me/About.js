import React from 'react'
import { Description } from '../text/Description'

import { HeaderLarge } from '../ui/headers/HeaderLarge'
import { Contacts } from './Contacts'
import { Interests } from './Interests'

import sty from '../../styles/components/me/about.module.scss'

export const About = () => {
  return (
    <section className="container_grid" id="about">
      <div className={sty.about}>
        <div className={sty.about_header}>
          <HeaderLarge title="Sobre mí" />
        </div>
        {/*TODO: Cambiar descripción*/}
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Description>
        <Contacts />
        <Interests />
      </div>
    </section>
  )
}
