import { ArtistProp } from "../Interfaces/ArtistProp";
import { ArtistData } from "../Interfaces/ArtistsData";

function getImage(artist: ArtistData) {
    const image = artist.images.find((image) => image.width == 305 && image.height == 225)
    return image ? image : artist.images[0]
}

export default function Artist({ artist }: ArtistProp) {
    return (
        <div>
            <h3>{artist.name}</h3>
            <img src={getImage(artist).url}></img>
        </div>
    )
}
