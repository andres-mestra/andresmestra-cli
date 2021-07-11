import React from 'react'
import Link from 'next/link'
import {
  header,
  header__title,
} from '../../styles/components/editor/dashboard.module.scss'
import { a_btn, a_btn_green } from '../../styles/components/a.module.scss'

const HeaderDashboard = React.memo(({ title, urlNew, textLink }) => {
  return (
    <header className={header}>
      <h1 className={header__title}>{title}</h1>
      <Link href={urlNew}>
        <a className={`${a_btn} ${a_btn_green}`}>{textLink}</a>
      </Link>
    </header>
  )
})

export default HeaderDashboard
