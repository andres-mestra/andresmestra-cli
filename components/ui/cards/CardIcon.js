import sty from '../../../styles/components/ui/cardIcon.module.scss'
import Icon from '../icons/Icon'

export const CardIcon = ({ icon, text }) => {
  return (
    <div className={sty.card_icon}>
      <Icon className={sty.card_icon__figure} href={icon} />
      <p>{text}</p>
    </div>
  )
}
