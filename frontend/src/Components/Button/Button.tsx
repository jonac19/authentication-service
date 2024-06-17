import './Button.css'

export default function Button({ label }: ButtonProp) {
    return (
        <button className='button'>{label}</button>
    )
}

interface ButtonProp {
    label: string
}
