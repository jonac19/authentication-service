import Artists from "./Artists";
import './Artists.css';

export default function ArtistsBody() {
    return (
        <div className='artists-body'>
            <h2>Trending Artists</h2>
            <Artists />
        </div>
    )
}
