const { useContext } = require('react')
const { PostsContext } = require('../context/PostsContext')

export const usePost = () => {
  const context = useContext(PostsContext)

  return { ...context }
}
