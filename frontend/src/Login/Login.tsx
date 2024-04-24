import React, {Dispatch, SetStateAction, useState} from 'react';
import './Login.css'

interface LoginProp {
    setToken: Dispatch<SetStateAction<string | undefined>>
}

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

export default function Login({ setToken }: LoginProp) {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await loginUser({
            username,
            password
        })
        if ("token" in res) {
            setToken(res.token);
        }
    }

    return (
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
