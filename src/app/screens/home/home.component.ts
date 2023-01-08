import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCitiesBySearchText, cleanCities } from 'src/app/state/actions/city-search.actions';
import { AppState } from 'src/app/state/app.state';
import { selectCitiesList } from 'src/app/state/selectors/city-search.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  cities$ = this.store.select(selectCitiesList)

  constructor(private store: Store<AppState>) { }

  handleTextChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {

      if (e.target.value.length == 0) {
        // since service is using switchMap, we need to dispatch an action to clean the state
        this.store.dispatch(loadCitiesBySearchText({ searchCityText: "randomtexttonotreturnanyresults" }))
        return
      }

      this.store.dispatch(loadCitiesBySearchText({ searchCityText: e.target.value }))
    }
  }

  clearCities() {
    this.store.dispatch(cleanCities())
  }


} 
