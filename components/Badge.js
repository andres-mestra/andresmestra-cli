const Badge = ({ text, type }) => {
  return (
    <>
      <span className={`badge ${type ?? 'badge_border'}`}>{text}</span>

      <style jsx>{`
        .badge {
          background-color: var(--white);
          border-radius: 3px;
          color: var(--black-2);
          font-weight: 500;
          font-size: 1.2rem;
          padding: 0.2rem 0.3rem;
          text-transform: uppercase;
        }

        .badge_border {
          border: var(--border-light);
        }

        .published {
          color: var(--black-2);
          background: var(--grey-dark-2);
        }

        .draft {
          color: var(--purple);
          background: rgba(173, 38, 180, 0.2);
        }

        .owner {
          color: var(--white);
          background: var(--black);
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default Badge
