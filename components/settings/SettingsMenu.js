import SettingsHeader from './SettingsHeader'
import SettingsImage from './SettingsImage'

import { container } from '../../styles/components/settingsMenu.module.scss'
import SettingsSlug from './SettingsSlug'
const SettingsMenu = () => {
  return (
    <div className={container}>
      <SettingsHeader />
      <SettingsImage />
      <SettingsSlug />
    </div>
  )
}

export default SettingsMenu
