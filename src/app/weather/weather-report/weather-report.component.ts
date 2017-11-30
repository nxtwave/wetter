import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.css']
})
export class WeatherReportComponent implements OnInit {

  /**
   * Zipcode
   */
  zipcode: string;

  /**
   * Weather weather-report
   */
  weather: any;

  /**
   * The error message (if exists)
   */
  error: string;

  constructor(private service: WeatherService) { }

  ngOnInit() {}

  /**
   * Form submit handler
   * @param zipcode the zipcode to search
   */
  search(zipcode) {
    console.log('zipcode', zipcode);
    this.service.getWeather(zipcode).subscribe( (result: any) => {

      console.log('result', result);

      if (result.name !== undefined) {

        this.weather = {
          lat: result.coord.lat,
          lon: result.coord.lon,
          city: result.name,
          temperature: result.main.temp,
          description: result.weather[0].description,
          icon: result.weather[0].icon
        };

        this.error = undefined;

      } else {

        this.error = `City is not found for zipcode ${zipcode}`;
        this.weather = undefined;

      }


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
