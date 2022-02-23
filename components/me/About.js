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
        <HeaderLarge title="Sobre mí" align="center" />
        <Description>
          Estudiante de Química que le gusta programar para hacer de la vida una
          experiencia más sencilla y práctica, siempre con el objetivo de
          aprender y aplicar las mejores técnicas de desarrollo web.
        </Description>
        <Contacts />
        <Interests />
      </div>
    </section>
  )
}
