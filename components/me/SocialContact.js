export const SocialContact = ({ icon, name, content }) => {
  return (
    <>
      <div className="social_contact">
        <svg className="social__icon">
          <use xlinkHref={icon}></use>
        </svg>
        <p className="social__name">{name}</p>
        <span>:</span>
        <p>{content}</p>
      </div>
      <style jsx>{`
        .social_contact {
          font-size: 1.5rem;
          padding: 1rem 0;
          text-align: left;
          display: grid;
          grid-template-columns: min-content 10rem 3rem max-content;
          grid-gap: 1rem;
          align-items: center;
        }

        .social__icon {
          fill: var(--color-secundary);
          margin-right: 3rem;
          height: 2rem;
          width: 2rem;
        }

        .social__name {
          font-weight: bold;
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}
