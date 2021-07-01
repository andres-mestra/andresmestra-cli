import { useContext } from 'react'
import Link from 'next/link'
import { AdminContext } from '../../context/AdminContext'
import {
  header,
  header__title,
} from '../../styles/components/editor/dashboard.module.scss'
import { a_btn, a_btn_green } from '../../styles/components/a.module.scss'

const HeaderDashboard = () => {
  const { active } = useContext(AdminContext).editorNav
  const { text } = active

  return (
    <header className={header}>
      <h1 className={header__title}>{text}</h1>
      <Link href={`/admin/${text}/new`}>
        <a className={`${a_btn} ${a_btn_green}`}>{`New ${text}`}</a>
      </Link>
    </header>
  )
}

export default HeaderDashboard
