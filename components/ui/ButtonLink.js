import Link from 'next/link'

const types = {
  red: {
    background: '--color-secundary',
    color: '--white',
  },
}

const text_transform = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
}

export const ButtonLink = ({ type, transform, children, href = '/' }) => {
  const { color, background } = types[type] ?? types.red

  return (
    <>
      <Link href={href}>
        <a>{children}</a>
      </Link>
      <style jsx>{`
        a {
          background-color: var(${background});
          border-radius: 3rem;
          color: var(${color});
          font-size: 1.3rem;
          padding: 0.5rem 1.5rem;
          width: max-content;
          text-transform: ${text_transform[transform] ?? text_transform.none};
        }

        a:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  )
}
