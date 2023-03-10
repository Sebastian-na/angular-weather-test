import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Weather } from 'src/app/core/models/weather/weather.interface';
import { loadForecast } from 'src/app/state/actions/forecast.actions';
import { loadForecastWeather, loadWeather } from 'src/app/state/actions/weather.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CityWeatherDetailsComponent implements OnInit {

  weatherLoading$ = this.store.select(state => state.weather.loading)
  weather$ = this.store.select(state => state.weather.weather)
  forecastLoading$ = this.store.select(state => state.forecast.loading)
  forecast$ = this.store.select(state => state.forecast.forecast)
  current$ = this.store.select(state => state.weather.current)

  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const lat = Number(params.get('lat'))
      const lon = Number(params.get('lon'))
      this.store.dispatch(loadWeather({ lat, lon }))
      this.store.dispatch(loadForecast({ lat, lon }))
    });
  }

  onForecastClick(weather: Weather) {
    this.store.dispatch(loadForecastWeather({ weather }))
  }

  kelvinToCelsius(kelvin: number | undefined) {
    if (!kelvin) return 0
    return Math.round(kelvin - 273.15)
  }

  formatUnixHour(unix: number | undefined) {
    if (!unix) return 0
    const date = new Date(unix * 1000)

    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: true }).format(date)
  }

  capitalizeFirstLetter(string: string | undefined) {
    if (!string) return ""
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
