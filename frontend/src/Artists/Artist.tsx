import { ArtistProp } from "../Interfaces/ArtistProp";

export default function Artist({ artist }: ArtistProp) {
    return (
        <div>
            <p>{artist.name}</p>
        </div>
    )
}
