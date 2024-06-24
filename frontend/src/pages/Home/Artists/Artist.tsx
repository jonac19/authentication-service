import { Link } from "react-router-dom";
import { ArtistData } from "../../../data/ArtistsData";
import "./Artists.css"

function getImage(artist: ArtistData) {
    const image = artist.images.find((image) => image.width === 305 && image.height === 225)
    return image ? image : artist.images[0]
}

export default function Artist({ artist }: ArtistProp) {
    return (
        <Link className='artist' to={`/artist/${artist.id}`}>
            <div className='artist-image-container'>
                <img src={getImage(artist).url} alt={artist.name}></img>
            </div>
            <div className='artist-description-container'>
                <h4>{artist.name}</h4>
            </div>
        </Link>
    )
}

interface ArtistProp {
    artist: ArtistData
}

