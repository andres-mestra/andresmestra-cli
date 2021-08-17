export const ButtonPrimary = ({ text, type }) => {
  return (
    <>
      <button type={type} className="button_primary">
        {text}
      </button>
      <style jsx>{`
        .button_primary {
          color: var(--white);
          background-color: var(--color-primary);
          border: none;
          border-radius: 3rem;
          font-size: 1.5rem;
          padding: 0.5rem 1.5rem;
          width: max-content;
        }
      `}</style>
    </>
  )
}
