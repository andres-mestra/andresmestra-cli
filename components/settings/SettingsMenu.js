import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'
import SettingsHeader from './SettingsHeader'
import SettingsImage from './SettingsImage'
import SettingsSlug from './SettingsSlug'
import SettingsTags from './SettingsTags'
import SettingsDescription from './SettingsDescription'

import {
  container,
  setting__show,
  setting__hidden,
} from '../../styles/components/settingsMenu.module.scss'
const SettingsMenu = () => {
  const { showSettings } = useContext(PostsContext)

  return (
    <div
      className={`${container} ${
        showSettings ? setting__show : setting__hidden
      }`}
    >
      <SettingsHeader />
      <SettingsImage />
      <SettingsSlug />
      <SettingsTags />
      <SettingsDescription />
    </div>
  )
}

export default SettingsMenu
