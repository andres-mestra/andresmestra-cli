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
        <svg className="card__icon">
          <use xlinkHref={tecnology.logo}></use>
        </svg>
        <div className="card__content">
          <h3 className="card__title">{tecnology.name}</h3>
          {tecnology?.description && (
            <p className="card__description">{tecnology.description}</p>
          )}
        </div>
      </div>
      <style jsx>{`
        .card__tecnology {
          background-image: linear-gradient(to right bottom, ${gradient});
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          height: max-content;
        }

        .card__icon {
          fill: var(--white);
          height: 4rem;
          width: 4rem;
        }

        .card__content {
          text-align: left;
        }

        .card__title {
          color: var(--color-primary);
          font-size: 2rem;
          font-weight: 500;
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
