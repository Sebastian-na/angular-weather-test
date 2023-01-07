import { Weather } from "./weather.interface"

export interface WeatherState {
    loading: boolean
    weather: Weather | null
}
