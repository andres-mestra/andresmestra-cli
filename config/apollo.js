import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'node-fetch'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  fetch,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication from localstorage
  const token = localStorage.getItem('token') ?? ''
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  }
})

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

export default client
