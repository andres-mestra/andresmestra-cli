import { gql } from '@apollo/client'

const ALLPOSTS = gql`
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
const AllCATEGORIES = gql`
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

const editorQueries = {
  posts: ALLPOSTS,
  tags: AllCATEGORIES,
}

export default editorQueries
