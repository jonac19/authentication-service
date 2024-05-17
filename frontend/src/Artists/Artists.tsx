import ArtistsData from "../Interfaces/ArtistsData"

async function get_artists() {
    return fetch(`http://127.0.0.1:3000/api/artists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify("")
        })
        .then(data => data.json() as Promise<ArtistsData>)
}

export default function Artists() {
    return (
        <div>
        </div>
    )
}
