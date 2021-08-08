export const TitleSmall = ({ children, color }) => {
  return (
    <>
      <h3>{children}</h3>
      <style jsx>{`
        h3 {
          color: ${color ?? 'var(--color-primary)'};
          font-size: 2rem;
        }
      `}</style>
    </>
  )
}
