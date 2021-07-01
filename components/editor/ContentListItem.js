import { useMemo } from 'react'
import Link from 'next/link'
import { dateShort } from '../../helpers/dateFormat'
import {
  list__item,
  list__item__info,
  list__item__title,
  list__item__subinfo,
  list__item__author,
  list__item__category,
  list__item__tag_purple,
  list__item__tag,
} from '../../styles/components/editor/contentList.module.scss'

const ContentListItem = ({
  id,
  title,
  name,
  author,
  categories,
  slug,
  published,
  updatedAt,
  _count,
  __typename,
}) => {
  const type = __typename.toLowerCase()
  const count = _count ? Object.keys(_count).pop() : null
  const category = categories?.length ? categories[0].name : null
  const memoDate = useMemo(() => {
    return dateShort(updatedAt)
  })

  return (
    <li className={list__item}>
      <Link href={`/admin/${type}/${id}`}>
        <a>
          <div className={list__item__info}>
            <h3 className={list__item__title}>{title || name}</h3>
            <div className={list__item__subinfo}>
              {author?.username && (
                <p className={list__item__author}>
                  By<span>{author.username}</span>
                </p>
              )}
              {category && (
                <p className={list__item__category}>
                  In<span>{category}</span>
                </p>
              )}
            </div>
          </div>
          <div>
            {published !== undefined &&
              (published ? (
                <span className={list__item__tag}>published</span>
              ) : (
                <span
                  className={`${list__item__tag} ${list__item__tag_purple}`}
                >
                  draft
                </span>
              ))}
            {slug && <span>{slug}</span>}
          </div>
          <div>
            {updatedAt && <span>{memoDate}</span>}
            {_count && <span>{`${_count[count]} ${count}`}</span>}
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ContentListItem