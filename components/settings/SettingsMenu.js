import SettingsHeader from './SettingsHeader'
import SettingsImage from './SettingsImage'
import SettingsSlug from './SettingsSlug'
import SettingsTags from './SettingsTags'
import SettingsDescription from './SettingsDescription'

import { container } from '../../styles/components/settingsMenu.module.scss'
const SettingsMenu = () => {
  return (
    <div className={container}>
      <SettingsHeader />
      <SettingsImage />
      <SettingsSlug />
      <SettingsTags />
      <SettingsDescription />
    </div>
  )
}

export default SettingsMenu
