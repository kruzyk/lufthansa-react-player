import styled, { css } from 'styled-components'

{/* <Input disabled={false} type={email} placeholder={placeholder} required={true}> </Input> */ }

interface Props {
    disabled: boolean,
    type: string,
    placeholder: string
    value: string,
    required: boolean
}


export const Input = styled.input<Props>`
    padding:10px;
    border-radius:10px;

    ${props => props.disabled === true && css`
    background: grey;
    color: grey;
  `}
`
