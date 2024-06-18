import { Image } from './ImageData'

export type ShowsData = {
    _embedded: {
        events: ShowData[]
    }
}

export type ShowData = {
    name: string,
    id: string,
    url: string,
    locale: string,
    images: Image[],
    dates: {
        start: Date,
        end: Date
    }
}

type Date = {
    dateTime: string
}
