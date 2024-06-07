import { ArtistProp } from "../Interfaces/ArtistProp";
import { ArtistData } from "../Interfaces/ArtistsData";
import "./Artists.css"

function getImage(artist: ArtistData) {
    const image = artist.images.find((image) => image.width === 305 && image.height === 225)
    return image ? image : artist.images[0]
}

export default function Artist({ artist }: ArtistProp) {
    return (
        <div className='artist'>
            <img className='artist_img' src={getImage(artist).url} alt={artist.name}></img>
            <h3>{artist.name}</h3>
        </div>
    )
}
