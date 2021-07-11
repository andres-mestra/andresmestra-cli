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
      name
      slug
      _count {
        posts
      }
    }
  }
`
