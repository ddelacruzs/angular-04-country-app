import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries;
      });
  }
}
