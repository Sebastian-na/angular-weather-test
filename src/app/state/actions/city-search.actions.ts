import { createAction, props } from "@ngrx/store";
import { City } from "src/app/core/models/city/city.interface";

export const loadCitiesBySearchText = createAction(
    "[City Search] Load Cities By Search Text",
    props<{ searchCityText: string }>()
);

export const loadCitiesBySearchTextSuccess = createAction(
    "[City Search] Load Cities By Search Text Success",
    props<{ cities: City[] }>()
);

export const cleanCities = createAction(
    "[City Search] Clean Cities"
);
