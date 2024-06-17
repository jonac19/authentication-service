import Button from '../Button/Button'
import './Hero.css'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <h1>Let the shows flow</h1>
                <h3>
                    <span>Sign-in or create an account today</span>
                    <span>Life's too short to go slow-mo</span>
                </h3>
                <Button label='Sign In' />
                <Button label='Create an Account' />
            </div>
        </div>
    )
}
