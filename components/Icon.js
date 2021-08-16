const Icon = ({ className, href }) => {
  return (
    <svg className={`${className ?? 'icon'}`}>
      <use xlinkHref={href}></use>
    </svg>
  )
}

export default Icon
