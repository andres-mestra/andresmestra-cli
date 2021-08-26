import { MenuProvider } from '../../context/MenuContext'
import { Header } from './Header'
import { MovilBar } from './MovilBar'
import { Footer } from './Footer'

const PublicLayout = ({ children }) => {
  return (
    <MenuProvider>
      <>
        <Header />
        <MovilBar />
        {children}
        <Footer />
      </>
    </MenuProvider>
  )
}

export default PublicLayout
