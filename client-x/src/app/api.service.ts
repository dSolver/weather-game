import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get('api/v1/forecast/location/Elmira%20ON')
  }
}
