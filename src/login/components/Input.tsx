import styled, { css } from 'styled-components'

interface Props {
  id: string,
  type: string,
  name: string,
  value: string,
  label: string,
  placeholder?: string
  handleChange: () => void,
  errorMessage: string,
  disabled?: boolean,
  required?: boolean,
  isValid: boolean
}

const Label = styled.label`
  padding: 10px;
  `

const InputField = styled.input`
    padding:10px;
    border-radius:10px;

    ${props => props.disabled === true && css`
    background: grey;
    color: grey;
  `}
`

const Input: React.FC<Props> = ({ id, type, name, value, label, placeholder, handleChange, errorMessage, disabled, required, isValid }) => {
  return (
    <div className="inputContainer">
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <span className="error">{errorMessage}</span>
      )}
    </div>
  );
}

export default Input;