import {Component, ElementRef, ViewChild} from '@angular/core';
import {LocationService} from '../location.service';
import {OptionData} from '../shared/components/inputAutocomplete/interfaces/optionData';
import {fakeCountriesListAvailable} from '../shared/mock/fakeCountriesListAvailable';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  @ViewChild('zipcode') zipcode!: ElementRef;
  // Get countries data to be used with inputAutocomplete
  public countriesDataList: OptionData[] = this.service.CountriesDataList;

  constructor(private service : LocationService) {}

  addLocation(){
    this.service.addLocation(this.zipcode.nativeElement.value);
  }

  // Retrieve the country data selected by the user to send the zipcode in the appropriate input.
  getCountryData(countrySelectedData: any) {
    this.zipcode.nativeElement.value = countrySelectedData.value;
  }
}
