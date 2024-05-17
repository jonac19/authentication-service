type Artist = {
    name: string,
    id: string,
    url: string,
    locale: string
}

type ArtistsData = {
    _embedded: {
        attractions: Artist[]
    }
}

export default ArtistsData
