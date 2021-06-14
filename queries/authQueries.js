import { gql } from '@apollo/client'

export const ME = gql`
  query me {
    me {
      id
      username
      email
      role
    }
  }
`

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        username
        email
        role
      }
      token
    }
  }
`

export const REGISTER = gql`
  mutation newUser($input: UserInput) {
    createUser(input: $input) {
      user {
        id
        username
        email
        role
      }
      token
    }
  }
`
