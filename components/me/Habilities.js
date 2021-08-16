import { CardTecnology } from '../ui/cards/CardTecnology'

import { tecnologies } from '../../utils/tecnologies'
import { HeaderLarge } from '../ui/headers/HeaderLarge'
const keyTenologies = Object.keys(tecnologies)

import sty from '../../styles/components/me/habilities.module.scss'

export const Habilities = () => {
  return (
    <section className="container_grid" id="habilities">
      <div className={sty.habilities}>
        <HeaderLarge title="Habilidades" />
        <div className={sty.container_cards}>
          {keyTenologies.map((name) => (
            <CardTecnology key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
