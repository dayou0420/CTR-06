import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  weatherData: any;

  constructor(private weather: WeatherService) {
    this.weather.getWeatherData().subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
