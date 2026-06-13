import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) { }

  

getCountryInformation(countryId?: string): Observable<any> {
  const apiUrl = countryId ? `http://api.worldbank.org/v2/country/${countryId}?format=json` : `http://api.worldbank.org/v2/country?format=json`;
  return this.http.get(apiUrl);
  
}

}
