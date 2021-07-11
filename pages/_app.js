import client from '../config/apollo'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../auth/AuthContext'
import LayoutAdmin from '../components/Layout/LayoutAdmin'

import '../styles/globals.scss'

const layouts = {
  ADMIN: LayoutAdmin,
  PUBLIC: ({ children }) => <>{children}</>,
}

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component?.layout] || layouts.PUBLIC
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
