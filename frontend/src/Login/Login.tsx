import React from 'react';
import './Login.css'

export default function Login() {
    return (
        <div>
            <h1>Please Log In</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
