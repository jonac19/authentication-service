import React, { useState, useEffect } from 'react'
import Show from './Show'
import { ShowsData } from '../../../data/ShowsData'
import './Shows.css'

export default function Shows() {
    const [shows, setShows] = useState<ShowsData>()

    useEffect(() => {
        setShows(JSON.parse('{"_embedded": {"events": [{"name": "P!NK: Summer Carnival 2024", "images": [{"url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg"}], "dates": {"start": {"dateTime": "2024-08-10T23:30:00Z"}}}, {"name": "P!NK: Summer Carnival 2024", "images": [{"url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg"}], "dates": {"start": {"dateTime": "2024-08-10T23:30:00Z"}}}]}}'))
    }, [])
    

    return (
        <div className='shows-list'>
            {shows && shows._embedded.events.map((show) => <Show show={show} />)}
        </div>
    )
}
