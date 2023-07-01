import { Description } from '../text/Description'
import { TitleLarge } from '../text/TitleLarge'
import { TitleMedium } from '../text/TitleMedium'
import { LinkSecundary } from '../ui/buttons/LinkSecundary'
import { LinkSecundaryOutline } from '../ui/buttons/LinkSecundaryOutline'
import { Link } from '../ui/links/Link'

import sty from '../../styles/components/me/presentation.module.scss'

export const Presentation = () => {
  return (
    <section id="home" className={sty.presentation}>
      <TitleLarge color="var(--color-secundary)">Andres Mestra</TitleLarge>
      <TitleMedium>Front-end Developer</TitleMedium>
      <Description>
        Tengo experiencia en el desarrollo de aplicaciones web, escritorio y
        móviles, así como en la integración de hardware. Me comprometo con
        soluciones innovadoras y efectivas y entiendo la importancia del
        análisis y la comunicación en equipo para alcanzar el éxito del
        proyecto. Actualmente trabajo en
        <Link
          target="_blank"
          to="https://ticketplus.cl/"
          color="var(--color-secundary)"
        >
          Ticketplus.cl
        </Link>
      </Description>

      <div className={sty.presentation__links}>
        <LinkSecundary
          href="https://www.linkedin.com/in/jhon-andres-mestra-tapias-aa2318203/"
          target="_blank"
        >
          Contacto
        </LinkSecundary>
        {/* <LinkSecundaryOutline
          href="CV/Jhon_Andres_Mestra_Tapias_Front_end_Web_Developer.pdf"
          target="_blank"
        >
          Descargar CV
        </LinkSecundaryOutline> */}
      </div>
    </section>
  )
}
