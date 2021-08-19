import { Header } from './Header'
import { MovilBar } from './MovilBar'

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MovilBar />
      {children}
    </>
  )
}

export default PublicLayout
