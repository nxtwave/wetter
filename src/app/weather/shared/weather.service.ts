import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather(zipcode): Observable<any> {
    const params = new HttpParams().set('zipcode', zipcode);

    return this.http.get<any>('/api/weather', {params: params})
  }

}
