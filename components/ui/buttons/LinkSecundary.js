import Link from 'next/link'
import sty from '../../../helpers/styles/StyleButton'

const text_transform = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
}

export const LinkSecundary = ({ transform, children, href = '/' }) => {
  return (
    <>
      <Link href={href}>
        <a className={sty.btn}>{children}</a>
      </Link>
      <style jsx>{`
        a {
          background-color: var(--color-secundary);
          border-radius: 3rem;
          color: var(--white);
          font-size: 1.3rem;
          padding: 0.5rem 1.5rem;
          width: max-content;
          text-transform: ${text_transform[transform] ?? text_transform.none};
        }
      `}</style>
    </>
  )
}
