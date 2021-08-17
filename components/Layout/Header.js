import Logo from '../Logo'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <>
      <header>
        <h2>AndresMestra</h2>
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
