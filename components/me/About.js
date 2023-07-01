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
        {/* <HeaderLarge title="Sobre mí" align="center" />
        <Description>
          Tengo experiencia en el desarrollo de aplicaciones web, escritorio y
          móviles, así como en la integración de hardware. Me comprometo con
          soluciones innovadoras y efectivas y entiendo la importancia del
          análisis y la comunicación en equipo para alcanzar el éxito del
          proyecto.
        </Description> */}
        <Contacts />
        <Interests />
      </div>
    </section>
  )
}
