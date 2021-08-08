import { TitleMedium } from '../text/TitleMedium'
import { CardTecnology } from '../ui/cards/CardTecnology'

export const Professional = () => {
  return (
    <>
      <section className="professional" id="conocimiento">
        <TitleMedium>Profesional en</TitleMedium>
        {/*TODO: realizar con una lista*/}
        <div className="container_cards">
          <CardTecnology name="html" />
          <CardTecnology name="css" />
          <CardTecnology name="javascript" />
          <CardTecnology name="apollographql" />
          <CardTecnology name="html" />
          <CardTecnology name="css" />
          <CardTecnology name="javascript" />
          <CardTecnology name="apollographql" />
        </div>
      </section>
      <style jsx>{`
        .professional {
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
