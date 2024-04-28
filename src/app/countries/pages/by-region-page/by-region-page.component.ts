import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.services';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: string): void {
    this.countriesService.searchRegion(term)
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
