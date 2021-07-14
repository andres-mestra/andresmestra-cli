import { list__header } from '../../styles/components/dashboard/contentList.module.scss'

const ContentListHeader = ({ titles }) => {
  return (
    <div className={list__header}>
      {titles.map((title) => (
        <div key={title}>{title}</div>
      ))}
    </div>
  )
}

export default ContentListHeader
