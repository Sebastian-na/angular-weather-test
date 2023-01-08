import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { CityWeatherDetailsComponent } from './screens/city-weather-details/city-weather-details.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/effects/weather.effects';
import { ForecastEffects } from './state/effects/forecast.effects';
import { CitySearchEffects } from './state/effects/city-search.effects';
import { LoaderComponent } from './components/loader/loader.component';
import { ForecastItemComponent } from './components/forecast-item/forecast-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityWeatherDetailsComponent,
    LoaderComponent,
    ForecastItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([WeatherEffects, ForecastEffects, CitySearchEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
