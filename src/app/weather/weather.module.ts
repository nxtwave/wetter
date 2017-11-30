import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { WeatherService } from './shared/weather.service';
import { IconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    WeatherRoutingModule
  ],
  declarations: [WeatherReportComponent, IconComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
