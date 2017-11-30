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
   * Weather report
   */
  report: any;

  /**
   * The error message (if exists)
   */
  error: string;

  /**
   * Component constructor
   * @param {WeatherService} service the injected data service
   */
  constructor(private service: WeatherService) { }

  ngOnInit() {}

  /**
   * Form submit handler
   * @param zipcode the zipcode to search
   */
  search(zipcode) {
    console.log('zipcode', zipcode);
    this.service.getWeather(zipcode).subscribe( (result: any) => {

      if (result.name !== undefined) {

        this.report = {
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
        this.report = undefined;
      }

    });

  }

}

export interface Report {
  lat: number;
  lon: number;
  city: string;
  temperature: number;
  description: string;
  icon: string;
}
