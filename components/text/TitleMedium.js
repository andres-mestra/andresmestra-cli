export const TitleMedium = ({ children, color }) => {
  return (
    <>
      <h2>{children}</h2>
      <style jsx>{`
        h2 {
          color: ${color ?? 'var(--color-primary)'};
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}
