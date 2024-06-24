import { Image } from './ImageData'

export type ArtistsData = {
    _embedded: {
        attractions: ArtistData[]
    }
}

export type ArtistData = {
    name: string,
    id: string,
    url: string,
    locale: string
    images: Image[]
}
