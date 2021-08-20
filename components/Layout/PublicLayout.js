import { Header } from './Header'
import { MovilBar } from './MovilBar'
import { MenuProvider } from '../../context/MenuContext'

const PublicLayout = ({ children }) => {
  return (
    <MenuProvider>
      <>
        <Header />
        <MovilBar />
        {children}
      </>
    </MenuProvider>
  )
}

export default PublicLayout
