import md5 from 'md5'
import Link from 'next/link'
import {
  list__item,
  list__staff,
  list__user,
  list__subtitle,
  list__figure,
  list__meta,
} from '../../styles/components/dashboard/contentList.module.scss'
import { Badge } from '../ui/Badge'

//TODO:Falta el editor
const badge = {
  ADMIN: 'owner',
  USER: 'normal',
}
const StaffListItem = ({
  __typename,
  email,
  username,
  slug,
  id,
  avatar,
  role,
}) => {
  const type = __typename.toLowerCase()
  const figure =
    avatar ?? `https://www.gravatar.com/avatar/${md5(email.trim())}`

  return (
    <li className={`${list__item} ${list__staff}`}>
      <Link href={`/admin/${type}/${slug || id}`}>
        <a>
          <div className={list__user}>
            <span
              style={{ backgroundImage: `url(${figure})` }}
              className={list__figure}
            ></span>
            <div>
              <h3 className={list__subtitle}>{username}</h3>
              <p className={list__meta}>{email}</p>
            </div>
          </div>
          <Badge text={role} type={badge[role] ?? false} />
        </a>
      </Link>
    </li>
  )
}

export default StaffListItem
