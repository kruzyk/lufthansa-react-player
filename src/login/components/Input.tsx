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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;
`

const Error = styled.span`
    color: red;
`

const Label = styled.label`
    margin: 0 0 6px 0;
    font-size: 1.1rem;
  `

const InputField = styled.input`
    padding: 10px;
    border: none;
    border-bottom: 1px solid #777;
    background-color: #eee;
    outline: none;
    font-size: 1.1rem;
    box-sizing: border-box;
    margin: 0 0 8px 0;
`

const Input: React.FC<Props> = ({ id, type, name, value, label, placeholder, handleChange, errorMessage, disabled, required, isValid }) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} type={type} name={name} value={value} onChange={handleChange} />
      {errorMessage && !isValid && (
        <Error>{errorMessage}</Error>
      )}
    </InputContainer>
  );
}

export default Input;