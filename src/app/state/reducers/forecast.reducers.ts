import { createReducer, on } from "@ngrx/store";
import { ForecastState } from "src/app/core/models/forecast/forecast.state";
import { loadForecast, loadForecastSuccess } from "../actions/forecast.actions";

export const initialState: ForecastState = {
    forecast: null,
    loading: false,
}

export const forecastReducer = createReducer(
    initialState,
    on(loadForecast, (state) => {
        return {
            ...state,
            loading: true,
        }
    }
    ),
    on(loadForecastSuccess, (state, { forecast }) => {
        return {
            ...state,
            forecast,
            loading: false,
        }
    }
    )
)
