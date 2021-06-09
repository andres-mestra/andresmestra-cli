const Icon = ({ className, href }) => {
  return (
    <svg className={`${className}`}>
      <use xlinkHref={href}></use>
    </svg>
  )
}

export default Icon
