import React from 'react'

export const TextArea = ({ id, text, placeholder, required }) => {
  return (
    <>
      <label htmlFor={id} className="textarea_group">
        <span className="textarea_text">{text}</span>
        <textarea
          id={id}
          className="textarea"
          placeholder={placeholder}
          required={required || false}
        />
      </label>
      <style jsx>{`
        .textarea {
          border: var(--border-light);
          border-radius: var(--border-round);
          padding: 1rem;
          outline: none;
          resize: none;
          height: 15rem;
        }

        .textarea_group {
          font-size: 1.5rem;
          display: grid;
          grid-row-gap: 1rem;
        }

        .textarea_text {
          color: var(--color-primary);
          font-weight: 700;
        }
      `}</style>
    </>
  )
}
