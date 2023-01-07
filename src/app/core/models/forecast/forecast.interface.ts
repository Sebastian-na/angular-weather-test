import { Weather } from "../weather/weather.interface"

export interface Forecast {
    cod: string
    list: Weather[]
    city: {
        id: number
        name: string
        coord: {
            lat: number
            lon: number
        }
    }
    country: string
}