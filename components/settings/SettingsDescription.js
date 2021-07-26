import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import {
  setting__subtitle,
  setting__group,
  setting__textarea,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsDescription = () => {
  const { post, actions } = useContext(PostsContext)

  return (
    <div>
      <p className={setting__subtitle}>Description</p>
      <div className={setting__group}>
        <textarea
          id="description"
          value={post.description}
          onChange={actions.handleChange}
          className={setting__textarea}
        />
      </div>
    </div>
  )
}

export default SettingsDescription
