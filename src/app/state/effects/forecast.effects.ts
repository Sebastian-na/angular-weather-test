import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { WeatherDetailsService } from "src/app/services/weather-details/weather-details.service";
import { loadForecast, loadForecastSuccess } from "../actions/forecast.actions";

@Injectable()
export class ForecastEffects {
    constructor(private actions$: Actions, private weatherService: WeatherDetailsService) { }

    loadWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadForecast),
            switchMap((action) => this.weatherService.getForecast(action.lat, action.lon)
                .pipe(
                    map(forecast => (loadForecastSuccess({ forecast }))),
                    catchError(() => EMPTY)
                )
            )
        )
    })
}
