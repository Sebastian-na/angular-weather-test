import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCities = (state: AppState) => state.cities;

export const selectCitiesList = createSelector(
    selectCities,
    (state) => state.cities
);