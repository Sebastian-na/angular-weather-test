import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from 'src/app/core/models/city/city.interface';


const apiKey = "2ee5cad5fe913208bfb77dcd4505c12a"

@Injectable({
  providedIn: 'root'
})
export class CityService {
  subscription: Observable<City[]> | null = null

  constructor(private http: HttpClient) {

  }

  getCitiesBySearchText(searchText: string): Observable<City[]> {
    return this.http.get<City[]>(`http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=${apiKey}`)
  }
}
