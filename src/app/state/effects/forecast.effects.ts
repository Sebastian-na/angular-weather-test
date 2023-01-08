import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap, filter } from "rxjs/operators";
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
                    map(forecast => {
                        // filter forecast list to only have one item per day with an hour between 8am and 10am
                        forecast.list = forecast.list.filter((item, index) => {
                            const date = new Date(item.dt * 1000)
                            const hour = date.getHours()
                            return hour >= 8 && hour <= 10
                        })
                        return loadForecastSuccess({ forecast })
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    })
}
