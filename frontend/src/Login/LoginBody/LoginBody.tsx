import LoginForm from './LoginForm';
import '../Login.css';
import { LoginProp } from '../../Interfaces/LoginProp'


export default function LoginBody({ setToken }: LoginProp) {
    return (
        <div className='login-body'>
            <LoginForm setToken={setToken} />
        </div>
    )
}