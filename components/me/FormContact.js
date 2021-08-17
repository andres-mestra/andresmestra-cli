import { InputText } from '../form/InputText'
import { TitleMedium } from '../text/TitleMedium'
import { TextArea } from '../form/TextArea'
import sty from '../../styles/components/me/formContact.module.scss'
import { ButtonPrimary } from '../ui/buttons/ButtonPrimary'

export const FormContact = () => {
  return (
    <section className={`${sty.form_contact} container_grid`} id="contact">
      <div className={sty.form_container}>
        <form>
          <TitleMedium>Contáctame</TitleMedium>
          <InputText
            id="name"
            text="Nombre"
            placeholder="Tu nombre"
            required={true}
          />
          <InputText
            id="email"
            text="Correo"
            type="email"
            placeholder="Correo electrónico"
            required={true}
          />
          <TextArea text="Mensaje" placeholder="Tu mensaje" required={true} />
          <ButtonPrimary text="Enviar" type="submit" />
        </form>
      </div>
    </section>
  )
}
