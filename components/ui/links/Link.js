export const Link = ({ to, target = '_blank', children, color }) => {
  return (
    <>
      <a href={to} target={target}>
        {children}
      </a>
      <style jsx>{`
        a {
          color: ${color};
          margin-left: 1rem;
        }
      `}</style>
    </>
  )
}
