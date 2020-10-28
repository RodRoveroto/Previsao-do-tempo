import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports:[WeatherComponent]
})
export class PagesModule { }
