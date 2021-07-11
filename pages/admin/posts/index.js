import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import useFilter from '../../../hooks/useFilter'
import { ALLPOSTS } from '../../../queries/editorQueries'
import { paginatePosts } from '../../../utils/filters'

import HeaderDashboard from '../../../components/dashboard/HeaderDashboard'
import ContentList from '../../../components/dashboard/ContentList'

import { container } from '../../../styles/components/editor/dashboard.module.scss'

const headList = ['title', 'status', 'last update']

const PostsDashboard = () => {
  const { Filter, filterState } = useFilter({
    defaultValue: paginatePosts,
  })
  const { paginate } = filterState

  const [loadData, { loading, error, data, called, refetch }] = useLazyQuery(
    ALLPOSTS,
    {
      variables: { paginate },
    }
  )

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (called) {
      refetch({ variables: { paginate } })
    }
  }, [filterState])

  const posts = data?.allPosts

  return (
    <section className={container}>
      <HeaderDashboard
        title="Posts"
        urlNew="/admin/posts/new"
        textLink="New Post"
      />
      <Filter />
      <ContentList
        items={posts}
        error={error}
        loading={loading}
        headList={headList}
      />
    </section>
  )
}

PostsDashboard.layout = 'ADMIN'
export default PostsDashboard
