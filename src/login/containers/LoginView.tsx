// tsrcc
import React, { Component } from 'react'
import styled from 'styled-components'
import { Input } from '../components/Input'


interface Props {
}
interface State {
}

export const StyledLogin = styled.div<Props>`
    display: flex;
    justify-content: center;
`


export default class Login extends React.Component<Props, State> {
    state: State = {
    }

    render() {
        return (
            <StyledLogin>
                <Input disabled={false} type={"email"} placeholder={"email"} required={true} value={""} />
            </StyledLogin>
        )
    }
}
