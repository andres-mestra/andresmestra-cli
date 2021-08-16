import { Perfil } from './Perfil'
import { Presentation } from './Presentation'

import sty from '../../styles/components/me/headerMe.module.scss'

export const HeaderMe = () => {
  return (
    <section className="container_grid">
      <div className={sty.header_me}>
        <Presentation />
        <Perfil />
      </div>
    </section>
  )
}
