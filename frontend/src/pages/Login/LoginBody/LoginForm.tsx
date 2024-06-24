import React, { useState } from 'react';
import Button from '../../../components/Button/Button'
import Divider from '../../../components/Divider/Divider'
import '../Login.css';
import { LoginProp } from '../../../data/LoginProp'

async function loginUser(credentials: object) {
    return fetch(`http://127.0.0.1:3000/api/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function LoginForm({ setToken }: LoginProp) {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<string>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await loginUser({
            username,
            password
        })
        if ("token" in res) {
            setToken(res.token);
        } else {
            setError(res.msg);
        }
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <h4>{error}</h4>
            <input type="text" name="username" placeholder='Username'onChange={e => setUsername(e.target.value)} />
            <input type="text" name="password" placeholder='Password'onChange={e => setPassword(e.target.value)} />
            <Button label='Submit' />
            <Divider />
            <Button label='Sign-in with Spotify' />
        </form>
    )
}
