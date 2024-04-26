import React, {Dispatch, SetStateAction} from 'react';
import LoginBody from './LoginBody/LoginBody';
import LoginHeader from './LoginHeader';

interface LoginProp {
    setToken: Dispatch<SetStateAction<string | undefined>>
}

export default function Login({ setToken }: LoginProp) {
    return (
        <div className='login'>
            <LoginHeader />
            <LoginBody setToken={setToken} />
        </div>
    )
}
