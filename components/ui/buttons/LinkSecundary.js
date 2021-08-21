import Link from 'next/link'
import sty from '../../../helpers/styles/StyleButton'

const text_transform = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
}

export const LinkSecundary = ({ children, href = '/', target }) => {
  return (
    <>
      <Link href={href}>
        <a className={sty.btn} target={target ?? '_self'}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          background-color: var(--color-secundary);
          color: var(--white);
        }
      `}</style>
    </>
  )
}
