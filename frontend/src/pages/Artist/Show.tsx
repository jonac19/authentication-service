import { ShowData } from "../../data/ShowsData";
import './Artist.css'

export default function Show({ show }: ShowProp) {
    const date = new Date(show.dates.start.dateTime)
    const month = date.toLocaleString(undefined, {month: 'short'})
    const day = date.toLocaleString(undefined, {day: 'numeric'})
    const time = date.toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})

    return (
        <div className='show'>
            <div className='date-time'>
                <h3>{month} {day}</h3>
                <h4>{time}</h4>
            </div>
            <div className='name-venue'>
                <h3>{show.name}</h3>
                <h4>Venue</h4>
            </div>
        </div>
    )
}

type ShowProp = {
    show: ShowData
}
