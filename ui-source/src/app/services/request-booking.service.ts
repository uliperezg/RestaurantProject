import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequestBookingService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'CacheControl': 'no-cache',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  requestBooking(request:any): Observable<any>{
    const path = '/users'
    return this.http.post<any>(path, request, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

