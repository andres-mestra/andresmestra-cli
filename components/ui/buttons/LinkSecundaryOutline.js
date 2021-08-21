import Link from 'next/link'
import sty from '../../../helpers/styles/StyleButton'

export const LinkSecundaryOutline = ({ children, href = '/', target }) => {
  return (
    <>
      <Link href={href}>
        <a className={sty.btn} target={target ?? '_self'}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          background-color: var(--white);
          color: var(--color-secundary);
        }
      `}</style>
    </>
  )
}
