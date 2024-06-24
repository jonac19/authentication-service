import { useEffect, useState } from "react"
import { ArtistsData } from "../../../data/ArtistsData"
import Artist from "./Artist"
import "./Artists.css"

async function get_artists() {
    return fetch(`http://127.0.0.1:3000/api/artists`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
        .then(data => data.json())
        .then(data => data as Promise<ArtistsData>)
}

export default function Artists() {
    const [artists, setArtists] = useState<ArtistsData>()

    useEffect(() => {
        get_artists()
            .then(data => setArtists(data))
    }, [])

    return (
        <div className='artists-container'>
            {artists && artists._embedded.attractions.map((artist) => <Artist artist={artist} />)}
        </div>
    )
}
