import { gql } from '@apollo/client'

export const ALLPOSTS = gql`
  query allPosts($paginate: principalPagInput, $pagcategories: simplePagInput) {
    allPosts(paginate: $paginate) {
      id
      title
      author {
        username
      }
      updatedAt
      published
      categories(pagcategories: $pagcategories) {
        name
        id
      }
    }
  }
`
export const AllCATEGORIES = gql`
  query allCategories($paginate: principalPagInput) {
    allCategories(paginate: $paginate) {
      id
      name
      slug
      _count {
        posts
      }
    }
  }
`

export const ALLUSERS = gql`
  query allUsers {
    allUsers {
      id
      username
      email
      slug
      role
      avatar
    }
  }
`

export const insertCategory = gql`
  mutation insertCategory($input: CategoryInput!) {
    insertCategory(input: $input) {
      category {
        id
        name
      }
      insert
    }
  }
`
