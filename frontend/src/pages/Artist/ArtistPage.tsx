import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab";
import { Image } from "../../data/ImageData";
import { ArtistData } from "../../data/ArtistsData"
import './Artist.css'
import ShowsSection from "./ShowsSection";

function getImage(artist: ArtistData): Image {
    const image = artist.images.find((image) => image.width === 305 && image.height === 225)
    return image ? image : artist.images[0]
}

async function getArtist(artistId: string): Promise<ArtistData> {
    return fetch(`http://127.0.0.1:3000/api/artists/${artistId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
        .then(data => data.json())
        .then(data => data as Promise<ArtistData>)
}

export default function ArtistPage() {
    const { id } = useParams() as { id: string }
    const [artist, setArtist] = useState<ArtistData>()
    
    useEffect(() => {
        getArtist(id)
            .then(data => setArtist(data))
    }, [])

    return (
        <>
            {artist ? (
                <div className='artist-page'>
                    <img src={getImage(artist).url} alt={artist.name}></img>
                    <h2>{artist.name}</h2>
                    <Tabs>
                        <Tab label='Shows'>
                            <h3>Shows Information</h3>
                            <ShowsSection artistId={id} />
                        </Tab>
                        <Tab label='About'>
                            <h3>About Information</h3>
                        </Tab>
                    </Tabs>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
