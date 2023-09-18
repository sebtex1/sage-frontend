import styled from 'styled-components'

const InputForm = ({
  label,
  type,
  id,
  name,
  value,
  required = false,
  onChange,
  placeholder = null,
  disabled = false,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {disabled ? (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          disabled
        />
      ) : (
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
export default InputForm

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  text-align: left;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  width: 100%;
`
