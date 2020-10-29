import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeatherSingleDayComponent } from './weather-single-day/weather-single-day.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherSingleDayComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports:[WeatherComponent, WeatherSingleDayComponent]
})
export class PagesModule { }
