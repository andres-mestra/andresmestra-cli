import Icon from '../icons/Icon'
import sty from '../../../styles/components/ui/social.module.scss'

export const Social = ({ link, icon }) => {
  return (
    <a className={sty.social_link} href={link} target="_blank">
      <Icon className={sty.social_icon} href={icon} />
    </a>
  )
}
