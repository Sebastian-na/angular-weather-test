import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { CityService } from "src/app/services/city/city.service";
import { loadCitiesBySearchText, loadCitiesBySearchTextSuccess } from "../actions/city-search.actions";

@Injectable()
export class CitySearchEffects {
    constructor(private actions$: Actions, private cityService: CityService) { }

    loadWeather$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadCitiesBySearchText),
            switchMap((action) => this.cityService.getCitiesBySearchText(action.searchCityText)
                .pipe(
                    map(cities => ({ type: loadCitiesBySearchTextSuccess.type, cities })),
                    catchError(() => EMPTY)
                )
            )
        )
    })
}
