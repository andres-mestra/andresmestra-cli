import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'
import urlParse from 'url-parse'
import Logo from '../Logo'
import NavList from './NavList'
import {
  nav,
  nav__header,
  nav__body,
} from '../../styles/layout/NavAdmin.module.scss'

const QUERY = gql`
  query allPosts {
    allPosts {
      id
      title
      slug
      categories {
        name
      }
    }
  }
`

const NavAdmin = () => {
  const { asPath } = useRouter()

  const [itemsManage, setItemsManage] = useState({
    title: 'Manage',
    items: [
      { text: 'posts', icon: 'icon-text', active: true },
      { text: 'tags', icon: 'icon-bookmark', active: false },
      { text: 'users', icon: 'icon-v-card', active: false },
    ],
  })

  const handleChangeHash = (hash) => {
    setItemsManage(({ title, items }) => {
      const newItems = items.map((item) => {
        return item.text === hash
          ? { ...item, active: true }
          : { ...item, active: false }
      })
      return { title, items: newItems }
    })
  }
  useEffect(() => {
    const hash = urlParse(asPath).hash.replace('#', '')
    handleChangeHash(hash)
  }, [asPath])

  //const { data, loading, error } = useQuery(QUERY)

  return (
    <nav className={nav}>
      <header className={nav__header}>
        <div>
          <Logo />
        </div>
      </header>
      <section className={nav__body}>
        <NavList title={itemsManage.title} items={itemsManage.items} />
      </section>
    </nav>
  )
}

export default NavAdmin
