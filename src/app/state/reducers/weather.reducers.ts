import { createReducer, on } from "@ngrx/store";
import { WeatherState } from "src/app/core/models/weather/weather.state";
import { loadForecastWeather, loadWeather, loadWeatherSuccess } from "../actions/weather.actions";

export const initialState: WeatherState = {
    weather: null,
    current: null,
    loading: false,
}

export const weatherReducer = createReducer(
    initialState,
    on(loadWeather, (state) => {
        return {
            ...state,
            loading: true,
        }
    }
    ),
    on(loadWeatherSuccess, (state, { weather }) => {
        return {
            ...state,
            weather,
            current: weather,
            loading: false,
        }
    }),

    on(loadForecastWeather, (state, { weather }) => {
        return {
            ...state,
            current: weather,
            loading: false,
        }
    })
)
