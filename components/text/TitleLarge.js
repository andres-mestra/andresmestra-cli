export const TitleLarge = ({ children, color }) => {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          color: ${color ?? 'var(--color-primary)'};
          font-size: 5rem;
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}
