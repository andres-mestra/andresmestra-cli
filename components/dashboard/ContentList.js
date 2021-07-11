import ContentListHeader from './ContentListHeader'
import ContentListItem from './ContentListItem'
import { container } from '../../styles/components/editor/contentList.module.scss'

const ContentList = ({ headList, items, loading, error }) => {
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <section className={container}>
      <ContentListHeader titles={headList} />
      <ol>
        {items &&
          items.map((item) => <ContentListItem key={item.id} {...item} />)}
      </ol>
    </section>
  )
}

export default ContentList
