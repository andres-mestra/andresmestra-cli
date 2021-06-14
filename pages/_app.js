import client from '../config/apollo'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../auth/AuthContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
