import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Ctmodel } from './ctmodel';
import { throwError, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class myservice {
  _url = 'http://localhost:3000/enroll'; 

  constructor(private _http: HttpClient) {}

  enroll(ctmodel: Ctmodel): Observable<any> {
    return this._http.post<any>(this._url, ctmodel)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
