export type ArtistData = {
    name: string,
    id: string,
    url: string,
    locale: string
}

export type ArtistsData = {
    _embedded: {
        attractions: ArtistData[]
    }
}
