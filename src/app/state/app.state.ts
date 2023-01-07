import { ActionReducerMap } from "@ngrx/store"
import { CitiesState } from "../core/models/city/city.state"
import { ForecastState } from "../core/models/forecast/forecast.state"
import { WeatherState } from "../core/models/weather/weather.state"
import { searchCityTextReducer } from "./reducers/city-search.reducers"
import { forecastReducer } from "./reducers/forecast.reducers"
import { weatherReducer } from "./reducers/weather.reducers"

export interface AppState {
    cities: CitiesState
    weather: WeatherState
    forecast: ForecastState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    weather: weatherReducer,
    forecast: forecastReducer,
    cities: searchCityTextReducer
}