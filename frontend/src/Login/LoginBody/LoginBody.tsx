import { Dispatch, SetStateAction } from 'react';
import LoginForm from './LoginForm';
import '../Login.css';

interface LoginProp {
    setToken: Dispatch<SetStateAction<string | undefined>>
}

export default function LoginBody({ setToken }: LoginProp) {
    return (
        <div className='login-body'>
            <LoginForm setToken={setToken} />
        </div>
    )
}