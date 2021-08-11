import { TitleMedium } from '../../text/TitleMedium'

export const HeaderLarge = ({ title }) => {
  return (
    <div className="header__large">
      <TitleMedium>{title}</TitleMedium>
      <style jsx>{`
        .header__large {
          margin-bottom: 3rem;
        }
      `}</style>
    </div>
  )
}
