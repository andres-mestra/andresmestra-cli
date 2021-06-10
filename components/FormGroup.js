import Icon from './Icon'
import FormAlert from './FormAlert'
import {
  form__control__group,
  form__input,
  form__control__group_error,
  form__icon,
} from '../styles/components/accessForm.module.scss'

const FormGroup = ({
  id,
  type,
  placeholder,
  value,
  icon,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <>
      <div
        className={`${form__control__group} ${
          // prettier-ignore
          (error && touched) && form__control__group_error
        }`}
      >
        <Icon className={form__icon} href={icon} />
        <input
          className={form__input}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>

      {
        // prettier-ignore
        (touched && error) && <FormAlert error={error} />
      }
    </>
  )
}

export default FormGroup
