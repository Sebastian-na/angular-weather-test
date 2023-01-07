import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { WeatherDetailsService } from "src/app/services/weather-details/weather-details.service";
import { loadWeather, loadWeatherSuccess } from "../actions/weather.actions";

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherDetailsService) { }

    loadWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadWeather),
            switchMap((action) => this.weatherService.getCurrentWeather(action.lat, action.lon)
                .pipe(
                    map(weather => (loadWeatherSuccess({ weather }))),
                    catchError(() => EMPTY)
                )
            )
        )
    }
    )

}

