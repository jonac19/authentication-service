import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import Divider from '../Divider/Divider'
import './Hero.css'

export default function Hero() {
    let navigate = useNavigate()

    const navigateLogin = () => {
        navigate('login')
    }

    return (
        <div className='hero'>
            <div className='hero-container'>
                <h1>Let the shows flow</h1>
                <h3>
                    <span>Sign-in or create an account today</span>
                    <span>Life's too short to go slow-mo</span>
                </h3>
                <Button label='Sign In' onClick={navigateLogin}/>
                <Divider />
                <Button label='Create an Account' />
            </div>
        </div>
    )
}
