import LoginForm from './LoginForm';
import '../Login.css';
import { LoginProp } from '../../../data/LoginProp'


export default function LoginBody({ setToken }: LoginProp) {
    return (
        <div className='login-body'>
            <h2>Welcome Back</h2>
            <LoginForm setToken={setToken} />
        </div>
    )
}
