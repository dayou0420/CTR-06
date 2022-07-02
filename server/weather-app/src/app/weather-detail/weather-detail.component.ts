import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  weatherDataTime: any = [];
  weatherDataTempMax: any = [];
  weatherDataTempMin: any = [];

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    this.weather.getWeatherData().subscribe((data: any) => {
      this.weatherDataTime = data.daily.time;
      this.weatherDataTempMax = data.daily.temperature_2m_max;
      this.weatherDataTempMin = data.daily.temperature_2m_min;
    });
  }
}
