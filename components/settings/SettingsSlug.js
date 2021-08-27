import { usePost } from '../../hooks/usePost'
import { slugCreate } from '../../helpers/slugCreate'
import {
  setting__subtitle,
  setting__group,
  setting__icon,
  setting__input,
} from '../../styles/components/settingsMenu.module.scss'
import Icon from '../ui/icons/Icon'

const SettingsSlug = () => {
  const { post, actions } = usePost()

  const handleBlur = (e) => {
    const { value } = e.target
    actions.setValues((values) => ({
      ...values,
      slug: slugCreate(value),
    }))
  }

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
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

export default SettingsSlug
