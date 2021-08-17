import { TitleMedium } from '../../text/TitleMedium'

export const HeaderLarge = ({ title, align }) => {
  return (
    <div className="header__large">
      <TitleMedium>{title}</TitleMedium>
      <style jsx>{`
        .header__large {
          margin-bottom: 4rem;
          text-align: ${align || 'length'};
        }
      `}</style>
    </div>
  )
}
