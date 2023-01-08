import { createAction, props } from "@ngrx/store";
import { Weather } from "src/app/core/models/weather/weather.interface";

export const loadWeather = createAction(
    "[Weather] Load Weather",
    props<{ lat: number, lon: number }>()
);

export const loadWeatherSuccess = createAction(
    "[Weather] Load Weather Success",
    props<{ weather: Weather }>()
);

export const loadForecastWeather = createAction(
    "[Weather] Load Forecast Weather",
    props<{ weather: Weather }>()
);