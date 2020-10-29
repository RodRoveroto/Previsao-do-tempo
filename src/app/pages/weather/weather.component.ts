import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  bgImg: string;

  constructor(
    private http: HttpClient
  ) { }

  loading = true;
  selectedDate: Object;
  weatherList: any[]
  weatherData
  showAll = false;
  maxDate: string
  minDate: string
  handdleFilter(event?: Event) {
    const filterValue = event ? (event.target as HTMLInputElement).value : '';
    this.weatherList = this.weatherData.forecast.filter(item => item.description.toLowerCase().includes(filterValue.toLowerCase()))
  }
  handdleWeatherCondition(entry) {
    switch (entry) {
      case 'storm':

        this.bgImg = 'rain'
        return 'fas fa-cloud-showers-heavy';

      case 'snow':

        this.bgImg = 'rain'
        return 'fas fa-snowflake';

      case 'hail':

        this.bgImg = 'cloud'
        return 'fas fa-cloud-meatball';

      case 'rain':

        this.bgImg = 'rain'
        return 'fas fa-cloud-rain';

      case 'fog':

        this.bgImg = 'cloud'
        return 'fas fa-smog';

      case 'clear_day':

        this.bgImg = 'sunny'
        return 'fas fa-sun';

      case 'clear_night':

        this.bgImg = 'sunny'
        return 'fas fa-moon';

      case 'cloud':

        this.bgImg = 'cloud'
        return 'fas fa-cloud';

      case 'cloudly_day':

        this.bgImg = 'sunny'
        return 'fas fa-cloud-sun';

      case 'cloudly_night':

        this.bgImg = 'cloud'
        return 'fas fa-cloud-moon';
    }

  }
  handdleDateFilter(event) {
    const filterValue = event ? (event.target as HTMLInputElement).value : '';
    if (filterValue.length > 5) {
      let value = filterValue.split('-')[2] + '/' + filterValue.split('-')[1]
      this.weatherList = this.weatherData.forecast.filter(item => item.date.includes(value))
    }

  }
  ngOnInit(): void {
    this.http.get('https://api.hgbrasil.com/weather?format=json-cors&key=6e7e2f15').subscribe(res => {
      this.weatherData = res['results']
      this.loading = false
      this.selectedDate = this.weatherData.forecast[0]
      this.handdleFilter()

    })
    const date = new Date()
    this.minDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    date.setDate(date.getDate() + 9)
    this.maxDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  }
}
