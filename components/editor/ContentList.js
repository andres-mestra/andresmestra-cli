import { memo, useContext, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { AdminContext } from '../../context/AdminContext'
import { PaginateMenuContext } from '../../context/PaginateMenuContext'
import editorQueries from '../../queries/editorQueries'

import ContentListHeader from './ContentListHeader'
import ContentListItem from './ContentListItem'
import { container } from '../../styles/components/editor/contentList.module.scss'

const ContentList = memo(() => {
  const { editorNav } = useContext(AdminContext)
  const { text: query, head: headList } = editorNav.active
  const [{ paginate }] = useContext(PaginateMenuContext)[query]

  const { loading, error, data, refetch } = useQuery(editorQueries[query], {
    variables: { paginate },
  })

  useEffect(() => {
    if (!loading && data) {
      console.log('refech', loading, paginate)
      refetch({ paginate })
    }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const nameQuery = Object.keys(data)[0]
  const content = data[nameQuery]

  console.log('despues del efecto')
  return (
    <section className={container}>
      <ContentListHeader titles={headList} />
      <ol>
        {content.map((item) => (
          <ContentListItem key={item.id} {...item} />
        ))}
      </ol>
    </section>
  )
})

export default ContentList
