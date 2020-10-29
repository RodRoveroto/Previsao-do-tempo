import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-single-day',
  templateUrl: './weather-single-day.component.html',
  styleUrls: ['./weather-single-day.component.scss']
})
export class WeatherSingleDayComponent implements OnInit {
  @Input() data: Object;
  @Input() selectedDate: Object;
  constructor() { }
  bgImg: string;

  ngOnInit(): void {
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
}
