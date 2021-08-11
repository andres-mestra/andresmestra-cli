import Link from 'next/link'
import { navigationList } from '../../utils/navigationsList'

export const NavBar = () => {
  return (
    <>
      <nav>
        {/*TODO: realizar con una lista que contenga las rutas y text del link*/}
        <ul>
          {navigationList.map(({ text, route }) => (
            <li key={text}>
              <Link href={route}>
                <a>{text}</a>
              </Link>
            </li>
          ))}
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
