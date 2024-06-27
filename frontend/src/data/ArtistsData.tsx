import { Image } from './ImageData'

export type ArtistsData = {
    _embedded: {
        attractions: ArtistData[]
    }
}

export type ArtistData = {
    id: string,
    locale: string
    name: string,
    description: string,
    additionalInfo: string,
    url: string,
    images: Image[]
}
