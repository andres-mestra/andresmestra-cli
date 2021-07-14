import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useCursor } from '../../../hooks/useCursor'
import { AllCATEGORIES } from '../../../queries/editorQueries'
import { paginateCategories } from '../../../utils/filters'

import HeaderDashboard from '../../../components/dashboard/HeaderDashboard'
import ContentList from '../../../components/dashboard/ContentList'
import PaginationDashBoard from '../../../components/dashboard/PaginationDashboard'

import { container } from '../../../styles/components/dashboard/dashboard.module.scss'

const headList = ['Category', 'slug', 'No. of posts']
const paginate = paginateCategories.paginate

const CategoriesDashboard = () => {
  const [loadData, { loading, error, data, called }] = useLazyQuery(
    AllCATEGORIES,
    {
      variables: { paginate },
    }
  )

  const { cursor, changeCursors, backwards, forward, disable } = useCursor()

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (called && data) {
      changeCursors({ array: data?.allCategories, paginate })
    }
  }, [data])

  useEffect(() => {
    if (called) {
      loadData({ variables: { paginate: cursor } })
    }
  }, [cursor])

  return (
    <section className={container}>
      <HeaderDashboard
        title="Categories"
        urlNew="/admin/categories/new"
        textLink="New Category"
      />
      {data?.allCategories.length ? (
        <ContentList
          items={data?.allCategories}
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

CategoriesDashboard.layout = 'ADMIN'
export default CategoriesDashboard
