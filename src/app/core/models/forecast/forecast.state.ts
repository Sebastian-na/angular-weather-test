import { Forecast } from "./forecast.interface"

export interface ForecastState {
    loading: boolean
    forecast: Forecast | null
}