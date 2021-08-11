import client from '../config/apollo'
import { ApolloProvider } from '@apollo/client'

import LayoutAdmin from '../components/Layout/LayoutAdmin'
import PublicLayout from '../components/Layout/PublicLayout'

import '../styles/globals.scss'

const layouts = {
  ADMIN: LayoutAdmin,
  PUBLIC: PublicLayout,
}

function MyApp({ Component, pageProps }) {
  const Layout =
    layouts[Component?.layout] || (({ children }) => <>{children}</>)
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
