import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../../core/models/weather/weather.interface';
import { Observable } from 'rxjs';
import { Forecast } from '../../core/models/forecast/forecast.interface';

const apiKey = "196cc00d3b2b60b15e1eb9e0e385d6d3"

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailsService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, lon: number): Observable<Weather> {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  }

  getForecast(lat: number, lon: number): Observable<Forecast> {
    return this.http.get<Forecast>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  }
}
