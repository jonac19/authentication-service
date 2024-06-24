import './Button.css'

export default function Button({ label, onClick }: ButtonProp) {
    return (
        <button className='button' onClick={onClick}>{label}</button>
    )
}

interface ButtonProp {
    label: string,
    onClick?: () => void;
}
