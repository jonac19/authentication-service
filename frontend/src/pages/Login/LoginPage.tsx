import LoginBody from './LoginBody/LoginBody';
import './Login.css'
import { LoginProp } from '../../data/LoginProp'

export default function LoginPage({ setToken }: LoginProp) {
    return (
        <div className='login'>
            <LoginBody setToken={setToken} />
        </div>
    )
}
