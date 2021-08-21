import { SocialContact } from './SocialContact'
import { contactSocial } from '../../utils/contactSocial'

export const Contacts = () => {
  return (
    <>
      <div className="contacts">
        {contactSocial.map((contact) => (
          <SocialContact key={contact.name} {...contact} />
        ))}
      </div>
      <style jsx>{`
        .contact {
          display: grid;
          grid-template-columns: min-content repeat(3, 1fr);
          grid-gap: 1rem;
        }
      `}</style>
    </>
  )
}
