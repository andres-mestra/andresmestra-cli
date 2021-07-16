import { useMemo } from 'react'
import Link from 'next/link'
import Badge from '../Badge'
import ContentListTags from './ContentListTags'
import { dateShort } from '../../helpers/dateFormat'
import {
  list__item,
  list__item__info,
  list__item__title,
  list__item__subinfo,
  list__item__author,
  list__item__category,
  list__item__count,
} from '../../styles/components/dashboard/contentList.module.scss'

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
  const tags = categories?.length && categories.map(({ name }) => name)
  const memoDate = useMemo(() => {
    return dateShort(updatedAt)
  })

  return (
    <li className={list__item}>
      <Link href={`/admin/${type}/${slug || id}`}>
        <a>
          <div className={list__item__info}>
            <h3 className={list__item__title}>{title || name}</h3>
            <div className={list__item__subinfo}>
              {author?.username && (
                <p className={list__item__author}>
                  By<span>{author.username}</span>
                </p>
              )}
              <p className={list__item__category}>
                In
                {tags && <ContentListTags list={tags} />}
              </p>
            </div>
          </div>
          <div>
            {published !== undefined &&
              (published ? (
                <Badge text="published" type="published" />
              ) : (
                <Badge text="draft" type="draft" />
              ))}
            {slug && <span>{slug}</span>}
          </div>
          <div>
            {updatedAt && <span>{memoDate}</span>}
            {_count && (
              <span
                className={list__item__count}
              >{`${_count[count]} ${count}`}</span>
            )}
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ContentListItem
