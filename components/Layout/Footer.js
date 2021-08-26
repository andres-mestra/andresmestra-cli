import { Social } from '../ui/social/Social'
import { socialNetworks } from '../../utils/socialNetworks'
import { thanks } from '../../utils/thanks'
import sty from '../../styles/layout/footer.module.scss'

export const Footer = () => {
  return (
    <footer className={sty.footer}>
      <div className={sty.social_networks}>
        {socialNetworks.map((social) => (
          <Social key={social.name} {...social} />
        ))}
      </div>
      <p>Thanks</p>
      <div className={sty.links}>
        {thanks.map(({ name, link }) => (
          <a key={name} href={link} target="_blank">
            {name},
          </a>
        ))}
      </div>
    </footer>
  )
}
