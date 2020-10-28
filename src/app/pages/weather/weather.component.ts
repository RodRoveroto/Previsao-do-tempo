import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
  ) { }

  weatherList: any[]
  handdleImage: string
  mockItem = {
    by: "woeid",
    valid_key: true,
    results: {
      temp: 30,
      date: "28/10/2020",
      time: "13:14",
      condition_code: "32",
      description: "Ensolarado",
      currently: "dia",
      cid: "",
      city: "Sao Paulo, SP",
      img_id: "32",
      humidity: 30,
      wind_speedy: "22 km/h",
      sunrise: "5:23 am",
      sunset: "6:18 pm",
      condition_slug: "clear_day",
      city_name: "Sao Paulo",
      forecast: [
        {
          date: "28/10",
          weekday: "Qua",
          max: 31,
          min: 17,
          description: "Ensolarado",
          condition: "clear_day"
        },
        {
          date: "29/10",
          weekday: "Qui",
          max: 32,
          min: 17,
          description: "Parcialmente nublado",
          condition: "cloudly_day"
        },
        {
          date: "30/10",
          weekday: "Sex",
          max: 18,
          min: 16,
          description: "Alguns chuviscos",
          condition: "rain"
        },
        {
          date: "31/10",
          weekday: "Sáb",
          max: 16,
          min: 13,
          description: "Tempo nublado",
          condition: "cloud"
        },
        {
          date: "01/11",
          weekday: "Dom",
          max: 17,
          min: 12,
          description: "Tempo nublado",
          condition: "cloud"
        },
        {
          date: "02/11",
          weekday: "Seg",
          max: 18,
          min: 12,
          description: "Parcialmente nublado",
          condition: "cloudly_day"
        },
        {
          date: "03/11",
          weekday: "Ter",
          max: 20,
          min: 11,
          description: "Parcialmente nublado",
          condition: "cloudly_day"
        },
        {
          date: "04/11",
          weekday: "Qua",
          max: 23,
          min: 11,
          description: "Ensolarado com muitas nuvens",
          condition: "cloudly_day"
        },
        {
          date: "05/11",
          weekday: "Qui",
          max: 25,
          min: 13,
          description: "Ensolarado com muitas nuvens",
          condition: "cloudly_day"
        },
        {
          date: "06/11",
          weekday: "Sex",
          max: 28,
          min: 16,
          description: "Tempestades isoladas",
          condition: "storm"
        }
      ]
    },
    execution_time: 0,
    from_cache: true
  }

  handdleWeatherCondition(entry) {
    console.log(entry)
    switch (entry) {
      case 'storm':
        return 'fas fa-cloud-showers-heavy';

      case 'snow':
        return 'fas fa-snowflake';

      case 'hail':
        return 'fas fa-cloud-meatball';

      case 'rain':
        return 'fas fa-cloud-rain';

      case 'fog':
        return 'fas fa-smog';

      case 'clear_day':
        return 'fas fa-sun';

      case 'clear_night':
        return 'fas fa-moon';

      case 'cloud':
        return 'fas fa-cloud';

      case 'cloudly_day':
        return 'fas fa-cloud-sun';

      case 'cloudly_night':
        return 'fas fa-cloud-moon';
    }
  }
  ngOnInit(): void {
    let data = []
    data = this.mockItem.results.forecast
    this.weatherList = data
    console.log(this.mockItem)
    console.log(this.weatherList)
    if (this.mockItem.results.condition_slug === 'storm' || 'rain' || 'snow') {
      this.handdleImage = 'rain'
    }
    if (this.mockItem.results.condition_slug === 'clear_day' || 'clear_night ' || 'hail' || 'cloud' || 'fog') {
      this.handdleImage = 'cloud'
    }
    if (this.mockItem.results.condition_slug === 'cloudly_night' || 'cloudly_day') {
      this.handdleImage = 'sunny'
    }
  }
}
