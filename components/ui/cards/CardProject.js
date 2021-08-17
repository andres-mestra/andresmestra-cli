export const CardProject = ({ image, name, description, github, url }) => {
  return (
    <>
      <div className="project">
        <img className="project_image" src={image} />
        <h4 className="project_title">{name}</h4>
        <p className="project_description">{description}</p>

        <a href={github} target="_blank" className="project_link">
          <svg className="project_icon">
            <use xlinkHref="images/sprite.svg#icon-github"></use>
          </svg>
          <span>Github</span>
        </a>

        <a href={url} target="_blank" className="project_view">
          <svg className="project_icon">
            <use xlinkHref="images/sprite.svg#icon-new-tab"></use>
          </svg>
        </a>
      </div>

      <style jsx>{`
        .project {
          box-shadow: 0px 0px 5px var(--grey-dark-2);
          display: grid;
          font-size: 1.3rem;
          grid-template-columns: repeat(2, 1fr);
          grid-row-gap: 3rem;
        }

        .project_image {
          grid-column: 1 / -1;
          grid-row: 1 / 2;
          width: 100%;
        }

        .project_title {
          grid-column: 1 / -1;
          grid-row: 1 / 2;
          justify-self: center;
          align-self: end;
          color: var(--white);
          background-color: var(--color-primary);
          font-size: 1.8rem;
          font-weight: 500;
          text-align: center;
          text-transform: capitalize;
          padding: 0.3rem;
          transform: translateY(50%);
          width: 80%;
        }

        .project_description {
          grid-column: 1 / -1;
          padding: 0 2rem;
          text-align: justify;
          hyphens: auto;
          height: 8rem;
        }

        .project_link,
        .project_view {
          padding: 2rem;
          padding-top: 0;
          display: grid;
          grid-template-columns: repeat(2, max-content);
          grid-column-gap: 0rem;
        }

        .project_icon {
          fill: var(--color-primary);
          height: 2.3rem;
          width: 2.3rem;
        }

        .project_link span {
          padding-left: 1rem;
          color: var(--color-secundary);
        }

        .project_view {
          justify-self: end;
        }
      `}</style>
    </>
  )
}
