import { container } from '../../styles/components/dashboard/contentList.module.scss'
import StaffListItem from './StaffListItem'

const StaffList = ({ items, loading, error }) => {
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <section className={container}>
      <ol>
        {items &&
          items.map((item) => (
            <StaffListItem key={item?.id || item?.slug} {...item} />
          ))}
      </ol>
    </section>
  )
}

export default StaffList
