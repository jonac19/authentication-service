import { useEffect, useState } from "react"
import Button from "../../components/Button/Button"
import { ShowsData } from "../../data/ShowsData"
import Show from "./Show"

async function getShows(artistId: string): Promise<ShowsData> {
    return fetch(`http://127.0.0.1:3000/api/shows/${artistId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
        .then(data => data.json())
        .then(data => data as Promise<ShowsData>)
}

export default function ShowsSection({ artistId }: ShowsSectionProp) {
    const [numShows, setNumShows] = useState<number>(5)
    const [shows, setShows] = useState<ShowsData>()

    useEffect(() => {
        getShows(artistId)
            .then(data => setShows(data))
    }, [])

    const showMoreHandler = () => {
        if (shows && numShows < shows._embedded.events.length) {
            setNumShows(Math.min(numShows + 5, shows._embedded.events.length))
        }
    }

    return (
        <>
            {shows && shows._embedded.events.slice(0, numShows).map((show) => <Show key={show.id} show={show} />)}
            <Button label='Show More' onClick={showMoreHandler} />
        </>
    )
}

type ShowsSectionProp = {
    artistId: string
}
