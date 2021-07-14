import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import useFilter from '../../../hooks/useFilter'
import { useCursor } from '../../../hooks/useCursor'
import { ALLPOSTS } from '../../../queries/editorQueries'
import { paginatePosts } from '../../../utils/filters'

import HeaderDashboard from '../../../components/dashboard/HeaderDashboard'
import ContentList from '../../../components/dashboard/ContentList'
import PaginationDashBoard from '../../../components/dashboard/PaginationDashboard'

import { container } from '../../../styles/components/dashboard/dashboard.module.scss'

const headList = ['title', 'status', 'last update']

const PostsDashboard = () => {
  const { Filter, filterState } = useFilter({
    defaultValue: paginatePosts,
  })
  const { paginate } = filterState

  const [loadData, { loading, error, data, called }] = useLazyQuery(ALLPOSTS, {
    variables: { paginate },
  })

  const { cursor, changeCursors, backwards, forward, disable } = useCursor()

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (called && data) {
      changeCursors({ array: data?.allPosts, paginate })
    }
  }, [data, filterState])

  useEffect(() => {
    if (called) {
      loadData({ variables: { paginate: cursor } })
    }
  }, [cursor])

  useEffect(() => {
    if (called) {
      loadData({ variables: { paginate } })
    }
  }, [filterState])

  return (
    <section className={container}>
      <HeaderDashboard
        title="Posts"
        urlNew="/admin/posts/new"
        textLink="New Post"
      />
      <Filter />
      {data?.allPosts.length ? (
        <ContentList
          items={data?.allPosts}
          error={error}
          loading={loading}
          headList={headList}
        />
      ) : (
        <p>No data</p>
      )}

      <PaginationDashBoard
        backwards={backwards}
        forward={forward}
        disable={disable}
      />
    </section>
  )
}

PostsDashboard.layout = 'ADMIN'
export default PostsDashboard
