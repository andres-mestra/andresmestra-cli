export const Picture = ({ className, images }) => {
  return (
    <picture className={className}>
      <source srcSet={images[2]} media="(min-width: 1000px)" />
      <source srcSet={images[1]} media="(min-width: 750px)" />
      <img src={images[0]} />
    </picture>
  )
}
