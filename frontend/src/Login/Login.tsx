import React, {Dispatch, SetStateAction} from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';

interface LoginProp {
    setToken: Dispatch<SetStateAction<string | undefined>>
}

export default function Login({ setToken }: LoginProp) {
    return (
        <div>
            <LoginHeader />
            <LoginForm setToken={setToken} />
        </div>
    )
}
