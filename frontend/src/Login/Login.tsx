import React, {Dispatch, SetStateAction} from 'react';
import LoginBody from './LoginBody/LoginBody';
import LoginHeader from './LoginHeader';
import './Login.css'
import { LoginProp } from '../data/LoginProp'

export default function Login({ setToken }: LoginProp) {
    return (
        <div className='login'>
            <LoginHeader />
            <LoginBody setToken={setToken} />
        </div>
    )
}
