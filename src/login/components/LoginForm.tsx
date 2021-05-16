import React, { ChangeEventHandler, useState } from "react";
import styled from "styled-components";
import useInput from "../../core/hooks/useInput";
import { Button } from "../../stories/Button";
import { DataProps } from "../containers/LoginView";

export interface InputProps {
    type: string;
    error: string;
    value: string | React.Dispatch<React.SetStateAction<string>>;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;
`

export const Label = styled.label`
    margin: 0 0 6px 0;
    font-size: 1.1rem;
  `

export const Input = styled.input<InputProps>`
	padding: 10px;
    border: none;
    border-bottom: 1px solid #777;
    background-color: #eee;
    outline: none;
    font-size: 1.1rem;
    box-sizing: border-box;
    margin: 0 0 8px 0;
`;

export interface LoginFormProps {
    onLogin: (dataDraft: DataProps) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {

    const loginInput = useInput("", (value: string) => {
        if (value.length < 3) return ("Too short login");
        else return "";
    });
    const passwordInput = useInput("", (value: string) => {
        if (value.length < 3) return ("Password should be 6 words at least");
        else return "";
    });


    const onLoginButton = (e: any) => {
        e.preventDefault();

        loginInput.validation(loginInput.props.value);
        passwordInput.validation(passwordInput.props.value);

        if (loginInput.props.error !== "" || passwordInput.props.error) return;
        else {
            onLogin({
                login: loginInput.props.value,
                password: passwordInput.props.value,
            });
            loginInput.reset();
            passwordInput.reset();
        }
    };

    return (
        <FormContainer>
            <Label htmlFor="login">Login</Label>
            <Input
                aria-label="login"
                type="text"
                placeholder="Login"
                id="login"

                {...loginInput.props}
            />

            <Label htmlFor="password">Password</Label>
            <Input
                aria-label="password"
                type="password"
                placeholder="Password"
                id="password"

                {...passwordInput.props}
            />
            <div>
                <Button aria-label="LoginButton" onClick={() => onLoginButton} size="large" label="Login" />
            </div>
            <p>{loginInput.props.error.length ? loginInput.props.error : null}</p>
            <p>{passwordInput.props.error.length ? passwordInput.props.error : null}</p>
        </FormContainer>
    );
};

export default LoginForm;