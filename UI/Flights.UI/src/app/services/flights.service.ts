import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {  }

   getAllFlights(): Observable<Flight[]>  {
      return this.http.get<Flight[]>(this.baseApiUrl + '/api/flights');
   }

   addFlight(addFlightRequest: Flight): Observable<Flight> {
    addFlightRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Flight>(this.baseApiUrl + '/api/flights', addFlightRequest);
   }
}
