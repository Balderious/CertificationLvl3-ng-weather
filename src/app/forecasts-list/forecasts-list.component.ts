import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import {ActivatedRoute} from '@angular/router';
import {LocationService} from '../location.service';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

  zipcode: string;
  forecast: any;

  constructor(
      private weatherService: WeatherService,
      private locationService: LocationService,
      route : ActivatedRoute)
  {
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      const countryCode = this.locationService.getCountryCode(this.zipcode);
      weatherService.getForecast(this.zipcode, countryCode)
        .subscribe(data => this.forecast = data);
    });
  }
}
