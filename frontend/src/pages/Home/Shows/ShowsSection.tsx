import Button from '../../../components/Button/Button'
import './Shows.css'

export default function ShowsSection() {
    return (
        <div className='shows-body'>
            <h2>Discover Shows</h2>
            <div className='shows-content'>
                <Button label='Load More' />
            </div>
            
        </div>
    )
}
