import { tecnologies } from '../../../utils/tecnologies'

export const CardTecnology = ({
  name,
  title = 'tenology image',
  description,
  logo,
  background = ['#000', '#fff'],
}) => {
  const tecnology = tecnologies[name] ?? {
    name: title,
    logo,
    background,
    description,
  }
  const gradient = tecnology.background.join(', ')
  return (
    <>
      <div className="card__tecnology">
        <figure className="card__icon">
          <img
            width="45"
            height="45"
            src={tecnology.logo}
            alt={tecnology.name}
          />
        </figure>
        <div className="card__content">
          <h3 className="card__title">{tecnology.name}</h3>
          {tecnology?.description && (
            <p className="card__description">{tecnology.description}</p>
          )}
        </div>
        <span className="card__line"></span>
      </div>
      <style jsx>{`
        .card__tecnology {
          padding: 0.5rem;
          display: grid;
          grid-template-columns: min-content 1fr;
          grid-column-gap: 2rem;
          align-items: center;
          position: relative;
        }

        .card__line {
          background-image: linear-gradient(to right bottom, ${gradient});
          position: absolute;
          bottom: -9px;
          height: 1.5px;
          width: 100%;
        }

        .card__icon {
          background-image: linear-gradient(to right bottom, ${gradient});
          border-radius: 100%;
          display: flex;
          padding: 1.5rem;
          align-items: center;
          justify-content: center;
        }

        .card__icon img {
          object-fit: cover;
          object-position: center;
        }

        .card__content {
          text-align: left;
          padding: 0.5rem;
        }

        .card__title {
          color: var(--color-primary);
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .card__description {
          font-size: 1.5rem;
          font-weight: bolder;
          color: var(--color-text-acc-2);
        }
      `}</style>
    </>
  )
}
