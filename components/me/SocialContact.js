import { CardIcon } from '../ui/cards/CardIcon'

export const SocialContact = ({ icon, name, content }) => {
  return (
    <>
      <div className="social_contact">
        <CardIcon icon={icon} text={name} />
        <p className="social_contact_text">
          <span>:</span>
          {content}
        </p>
      </div>
      <style jsx>{`
        .social_contact {
          font-size: 1.5rem;
          padding: 1rem 0;
          text-align: left;
          display: flex;
          align-items: center;
        }

        .social_contact_text {
          margin-left: 2rem;
        }

        .social_contact_text span {
          margin-right: 2rem;
        }
      `}</style>
    </>
  )
}
