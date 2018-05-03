import { Component, OnInit } from '@angular/core';
import { WeatherProvider } from "../logic/weatherApi";
import { Weather } from "../logic/weather";

@Component({
  selector: 'weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class WeatherComponent implements OnInit{
  weatherx: WeatherProvider;
  weather: Weather;

  constructor() {
    this.weatherx = new WeatherProvider();
  }

  ngOnInit() {
    this.weather = this.weatherx.getWeather();
    console.log(this.weather.temp);
    console.log(this.weather.name);
    console.log(this.weather.speed);
    console.log(this.weather.pressure);
    console.log(this.weather.humidity);
    console.log(this.weather.description);
  }
}
