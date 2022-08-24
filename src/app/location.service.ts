import { Injectable } from '@angular/core';
import {WeatherService} from "./weather.service";
import {Observable, pipe, Subscriber, Subscription, timer} from 'rxjs';
import {fakeCountriesListAvailable} from './shared/mock/fakeCountriesListAvailable';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations : string[] = [];
  CountriesDataList : any = fakeCountriesListAvailable;
  private refreshTimer: Subscription;

  constructor(private weatherService : WeatherService) {}

  // Start auto refresh of locations current conditions
  startAutoRefreshLocationsCurrentConditions(delay: number) {
    this.refreshTimer = timer(1, delay).subscribe(
        pipe(() => {
          this.loadLocationsCurrentConditions();
        })
    )
  }

  // Load current conditions
  loadLocationsCurrentConditions() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString)
      this.locations = JSON.parse(locString);
    for (let loc of this.locations) {
        const countryCode = this.getCountryCode(loc);
        this.weatherService.addCurrentConditions(loc, countryCode);
      }
  }

  addLocation(zipcode : string){
    this.locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
    const countryCode = this.getCountryCode(zipcode);
    this.weatherService.addCurrentConditions(zipcode, countryCode);
  }

  // Get the country code associated with a zipcode in the database (currently mock)
  getCountryCode(zipcode:string) {
    return this.CountriesDataList.find(countryItem => countryItem.value === zipcode).code;
  }

  removeLocation(zipcode : string){
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations));
      this.weatherService.removeCurrentConditions(zipcode);
    }
  }

  // Stop auto refresh system
  stopAutoRefreshLocationsCurrentConditions() {
    this.refreshTimer.unsubscribe();
  }
}
