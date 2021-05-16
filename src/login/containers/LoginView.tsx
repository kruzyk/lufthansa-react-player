// tsrcc
import { useState } from "react";
import styled, { css } from "styled-components";
import LoginForm from "../components/LoginForm";

export interface DataProps {
    login: string;
    password: string;
}

export const Form = styled.form`
    max-width: 400px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    margin: 20px auto;
    padding: 20px;

      &_title {
      margin: 0 0 20px;
      text-align: center;
	}
`;

const defaultData: DataProps = {
    login: "",
    password: "",
};

const LoginView = () => {
    const [data, setData] = useState(defaultData);

    const onLogin = (dataDraft: DataProps) => {
        setData(dataDraft);
    };

    return (
        <Form>
            <h1 className="loginForm_title" data-testid="login">Login</h1>
            <LoginForm onLogin={onLogin} />
            <div>
                <p>{data.login && `Login: ${data.login}`}</p>
                <p>{data.password && `Pass: ${data.password}`}</p>
            </div>
        </Form>
    );
};

export default LoginView