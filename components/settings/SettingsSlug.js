import { useContext, useState } from 'react'
import { PostsContext } from '../../context/PostsContext'
import {
  setting__subtitle,
  setting__group,
  setting__icon,
  setting__input,
} from '../../styles/components/settingsMenu.module.scss'
import Icon from '../Icon'

const SettingsSlug = () => {
  const { post, actions } = useContext(PostsContext)
  const [url, setUrl] = useState('')
  const handleChange = (e) => {
    //TODO: add slug al context ( actions.handleChange )
  }
  //TODO: función para generar slug
  return (
    <div>
      <p className={setting__subtitle}>URL</p>
      <div className={setting__group}>
        <Icon className={setting__icon} href="/images/sprite.svg#icon-link" />
        <input
          id="slug"
          className={setting__input}
          value={post.slug}
          onChange={actions.handleChange}
        />
      </div>
    </div>
  )
}

export default SettingsSlug
