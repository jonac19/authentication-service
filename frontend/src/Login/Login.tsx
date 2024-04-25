import React, {Dispatch, SetStateAction} from 'react';
import LoginForm from './LoginForm';

interface LoginProp {
    setToken: Dispatch<SetStateAction<string | undefined>>
}

export default function Login({ setToken }: LoginProp) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm setToken={setToken} />
        </div>
    )
}
