import * as $ from 'jquery';
import { Weather } from "./weather";

export class WeatherProvider {
  readonly MAIN_URL = "http://api.openweathermap.org/data/2.5/"
  readonly ENDPOINT = "weather"
  defaultCityId = "756135"  //Warsaw
  cityId = "?id="+this.defaultCityId
  metricUnits = "&units=metric"
  langPl = "&lang=pl"
  readonly APIKEY = "&APPID=e7aa07ccc31d9b3a6b07d4e7e5ed9349"

  tempx: string;
  namex: string;
  windSpeedx: string;
  pressurex: string;
  humidityx: string;
  descriptionx: string;

  getWeather():Weather {
    let tempxx, namexx, speedxx, pressxx, humxx, descxx;
    $.ajaxSetup({'async': false});
    $.getJSON(this.MAIN_URL+this.ENDPOINT+this.cityId+this.metricUnits+this.langPl+this.APIKEY, (data) => {
      if(data.main.temp !== null && data.name !== null && data.wind.speed !== null
          && data.main.pressure !== null && data.main.humidity !== null && data.weather[0].description !== null) {
        this.tempx = data.main.temp
        this.namex = data.name
        this.windSpeedx = data.wind.speed
        this.pressurex = data.main.pressure
        this.humidityx = data.main.humidity
        this.descriptionx = data.weather[0].description
      }
      tempxx = this.tempx;
      namexx = this.namex;
      speedxx = this.windSpeedx;
      pressxx = this.pressurex;
      humxx = this.humidityx;
      descxx = this.descriptionx;
    });

    return new Weather(tempxx, namexx, speedxx, pressxx, humxx, descxx);
  }
}
