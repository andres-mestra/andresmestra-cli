export const InputText = ({ id, text, placeholder, type, required }) => {
  return (
    <>
      <label htmlFor={id} className="input_group">
        <span className="input_text">{text}</span>
        <input
          id={id}
          type={type || 'text'}
          placeholder={placeholder}
          required={required || false}
          className="input"
        />
      </label>
      <style jsx>{`
        .input {
          border: var(--border-light);
          border-radius: var(--border-round);
          outline: none;
          padding: 1rem;
        }

        .input_group {
          font-size: 1.5rem;
          display: grid;
          grid-row-gap: 1rem;
        }

        .input_text {
          color: var(--color-primary);
          font-weight: 700;
        }
      `}</style>
    </>
  )
}
