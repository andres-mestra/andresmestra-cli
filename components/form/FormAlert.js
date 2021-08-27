import { form__alert } from '../../styles/components/form/accessForm.module.scss'

const FormAlert = ({ error }) => {
  return <span className={form__alert}>{error}</span>
}

export default FormAlert
