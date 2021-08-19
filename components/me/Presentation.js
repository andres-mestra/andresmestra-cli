import { Description } from '../text/Description'
import { TitleLarge } from '../text/TitleLarge'
import { TitleMedium } from '../text/TitleMedium'
import { TitleSmall } from '../text/TitleSmall'
import { LinkSecundary } from '../ui/buttons/LinkSecundary'

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
        <LinkSecundary href="#contact" transform="uppercase">
          Contáctame
        </LinkSecundary>
      </div>
    </section>
  )
}
