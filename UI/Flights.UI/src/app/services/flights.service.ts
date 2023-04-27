import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {  }

   getAllFlights(): Observable<Flight[]>  {
      return this.http.get<Flight[]>(this.baseApiUrl + '/api/flights')
      .pipe(
        catchError(error => {
         return throwError(error.message); 
        }
        )
      );
   }

   addFlight(flight:any) {
     return this.http.post<Flight>(this.baseApiUrl + '/api/flights', flight)
    .pipe(
      catchError(error => {
       return throwError(error.message); 
      }
      )
    );
   }
}
