import { ButtonProp } from '../../data/ButtonProp'
import './Button.css'

export default function Button({ label }: ButtonProp) {
    return (
        <button className='button'>{label}</button>
    )
}
