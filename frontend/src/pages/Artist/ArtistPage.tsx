import { useParams } from "react-router-dom"

export default function ArtistPage() {
    const {id} = useParams()
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
