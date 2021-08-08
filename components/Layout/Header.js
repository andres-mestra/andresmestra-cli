import Logo from '../Logo'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <>
      <header>
        {/*TODO: Cambiar el logo*/}
        <figure>
          <Logo height={'6rem'} />
        </figure>
        <NavBar />
      </header>

      <style jsx>{`
        header {
          background-color: var(--color-bg);
          height: 7rem;
          width: 100%;
          display: grid;
          grid-template-columns: 15rem max-content;
          align-content: center;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}
