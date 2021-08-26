import Link from 'next/link'
import sty from '../../../helpers/styles/StyleButton'

export const LinkSecundary = ({ children, href = '/', target = '_self' }) => {
  return (
    <>
      <Link href={href}>
        <a className={sty.btn} target={target}>
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
