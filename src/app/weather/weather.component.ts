import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { WeatherService } from './shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  /**
   * Zipcode
   */
  zipcode: string;

  /**
   * Weather report
   */
  weather: any;

  constructor(private service: WeatherService) { }

  ngOnInit() {}

  /**
   * Form submit handler
   * @param zipcode the zipcode to search
   */
  search(zipcode) {
    console.log('zipcode', zipcode);
    this.service.getWeather(zipcode).subscribe( (result: any) => {

      this.weather = {
        lat: result.coord.lat,
        lon: result.coord.lon,
        city: result.name,
        temperature: result.main.temp,
        description: result.weather[0].description,
        icon: result.weather[0].icon
      };

      console.log('result', result);
      console.log('weather', this.weather);
    });

  }

}

export interface Weather {
  lat: number;
  lon: number;
  city: string;
  temperature: number;
  description: string;
  icon: string;
}
