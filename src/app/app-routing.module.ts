import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CityWeatherDetailsComponent } from './screens/city-weather-details/city-weather-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: CityWeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
