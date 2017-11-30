import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherReportComponent} from './weather-report/weather-report.component';

const routes: Routes = [
  {path: 'weather', component: WeatherReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
