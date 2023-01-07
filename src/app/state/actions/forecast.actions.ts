import { createAction, props } from "@ngrx/store";
import { Forecast } from "src/app/core/models/forecast/forecast.interface";

export const loadForecast = createAction(
    "[Forecast] Load Forecast",
    props<{ lat: number, lon: number }>()
);

export const loadForecastSuccess = createAction(
    "[Forecast] Load Forecast Success",
    props<{ forecast: Forecast }>()
);