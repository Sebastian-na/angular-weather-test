import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadForecast } from 'src/app/state/actions/forecast.actions';
import { loadWeather } from 'src/app/state/actions/weather.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.sass']
})
export class CityWeatherDetailsComponent implements OnInit {

  weatherLoading$ = this.store.select(state => state.weather.loading)
  weather$ = this.store.select(state => state.weather.weather)
  forecastLoading$ = this.store.select(state => state.forecast.loading)
  forecast$ = this.store.select(state => state.forecast.forecast)


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      const lat = Number(params.get('lat'))
      const lon = Number(params.get('lon'))
      console.log(lat, lon)
      this.store.dispatch(loadWeather({ lat, lon }))
      this.store.dispatch(loadForecast({ lat, lon }))
    });
  }

  kelvinToCelsius(kelvin: number | undefined) {
    if (!kelvin) return 0
    return Math.round(kelvin - 273.15)
  }
}
