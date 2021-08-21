import sty from '../../styles/components/form/controls.module.scss'

export const InputText = ({
  id,
  text,
  placeholder,
  type,
  required,
  onChange,
  value,
}) => {
  return (
    <label htmlFor={id} className={sty.form_group}>
      <span className={sty.form_label}>{text}</span>
      <input
        id={id}
        type={type || 'text'}
        placeholder={placeholder}
        required={required || false}
        className={sty.form_input}
        onChange={onChange}
        value={value}
      />
    </label>
  )
}
