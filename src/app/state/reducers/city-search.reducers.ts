import { createReducer, on } from "@ngrx/store";
import { CitiesState } from "src/app/core/models/city/city.state";
import { cleanCities, loadCitiesBySearchText, loadCitiesBySearchTextSuccess } from "../actions/city-search.actions";

export const initialState: CitiesState = {
    cities: [],
}

export const searchCityTextReducer = createReducer(
    initialState,
    on(loadCitiesBySearchText, (state, { searchCityText }) => {
        return {
            ...state,
        }
    }),
    on(loadCitiesBySearchTextSuccess, (state, { cities }) => {
        return {
            ...state,
            cities
        }
    }),
    on(cleanCities, (state) => {
        return {
            ...state,
            cities: []
        }
    })
)