import { CardTecnology } from '../ui/cards/CardTecnology'

import { tecnologies } from '../../utils/tecnologies'
import { HeaderLarge } from '../ui/headers/HeaderLarge'

const keyTenologies = Object.keys(tecnologies)

export const Habilities = () => {
  return (
    <>
      <section className="container_grid" id="habilities">
        <div className="habilities">
          <HeaderLarge title="Habilidades" />
          <div className="container_cards">
            {keyTenologies.map((name) => (
              <CardTecnology key={name} name={name} />
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        #habilities {
          background-color: var(--white);
        }

        .habilities {
          padding: 5rem 0;
          grid-column: center-start / center-end;
          text-align: center;
        }

        .container_cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
          grid-column-gap: 2rem;
          grid-row-gap: 4rem;
        }
      `}</style>
    </>
  )
}
