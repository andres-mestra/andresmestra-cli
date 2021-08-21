import sty from '../../styles/components/form/controls.module.scss'

export const TextArea = ({
  id,
  text,
  placeholder,
  required,
  onChange,
  value,
}) => {
  return (
    <label htmlFor={id} className={sty.form_group}>
      <span className={sty.form_label}>{text}</span>
      <textarea
        id={id}
        className={sty.form_textarea}
        placeholder={placeholder}
        required={required || false}
        onChange={onChange}
        value={value}
      />
    </label>
  )
}
