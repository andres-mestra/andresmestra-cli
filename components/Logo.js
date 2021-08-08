const Logo = ({ height }) => {
  return (
    <>
      <img className="logo" src="/logo-3.png" />
      <style jsx>{`
        .logo {
          fill: #000;
          height: ${height || '100%'};
        }
      `}</style>
    </>
  )
}

export default Logo
