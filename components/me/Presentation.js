import { Description } from '../text/Description'
import { TitleLarge } from '../text/TitleLarge'
import { TitleMedium } from '../text/TitleMedium'
import { TitleSmall } from '../text/TitleSmall'
import { LinkSecundary } from '../ui/buttons/LinkSecundary'
import { LinkSecundaryOutline } from '../ui/buttons/LinkSecundaryOutline'

import sty from '../../styles/components/me/presentation.module.scss'

export const Presentation = () => {
  return (
    <section id="home" className={sty.presentation}>
      <TitleSmall color="var(--color-secundary)">Hola, soy</TitleSmall>
      <TitleLarge>Andres Mestra</TitleLarge>
      <TitleMedium>Junior Front-end Developer</TitleMedium>
      {/*TODO: Cambiar esta presentación*/}
      <Description>
        Desarrollador web autodidacta desde hace 10 años, con mucha pasión por
        seguir aprendiendo y en busca de su primera experiencia laboral como
        front-end.
      </Description>

      <div className={sty.presentation__links}>
        <LinkSecundary
          href="https://www.linkedin.com/in/jhon-andres-mestra-tapias-aa2318203/"
          target="_blank"
        >
          Contacto
        </LinkSecundary>
        <LinkSecundaryOutline
          href="CV/Jhon_Andres_Mestra_Tapias_Front_end_Web_Developer.pdf"
          target="_blank"
        >
          Descargar CV
        </LinkSecundaryOutline>
      </div>
    </section>
  )
}
