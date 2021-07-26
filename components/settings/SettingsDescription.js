import { usePost } from '../../hooks/usePost'
import {
  setting__subtitle,
  setting__group,
  setting__textarea,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsDescription = () => {
  const { post, actions } = usePost()

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
