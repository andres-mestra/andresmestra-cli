import Link from 'next/link'

export const NavBar = () => {
  return (
    <>
      <nav>
        {/*TODO: realizar con una lista que contenga las rutas y text del link*/}
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ul {
          font-size: 1.5rem;
          display: grid;
          grid-auto-columns: max-content;
          grid-auto-flow: column;
          grid-column-gap: 2rem;
        }

        a {
          text-transform: capitalize;
          color: var(--color-primary);
          font-weight: bolder;
        }
      `}</style>
    </>
  )
}
