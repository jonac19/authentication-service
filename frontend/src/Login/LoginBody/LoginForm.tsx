import React, {Dispatch, SetStateAction, useState} from 'react';
import './LoginBody.css'

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
        <div className='login-form'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username:</p>
                    <input type="text" name="username" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password:</p>
                    <input type="text" name="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <p className=''>{error}</p>
                <div>
                    <button type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
