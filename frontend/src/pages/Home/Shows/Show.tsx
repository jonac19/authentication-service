import { ShowData } from '../../../data/ShowsData'
import './Shows.css'

export default function Show({ show }: ShowProp) {
    return (
        <div className='show'>
            <img src={show.images[0].url}></img>
            <div className='show-description-container'>
                <h4>{show.name}</h4>
                <h5>{show.dates.start.dateTime}</h5>
            </div>
        </div>
    )
}

interface ShowProp {
    show: ShowData
}
