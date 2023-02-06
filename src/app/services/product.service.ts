import { ErrorService } from './error.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // params:new HttpParams().append('limit', 5)
      params: new HttpParams({
        fromObject: { limit: 5 },
      }),
    }).pipe(
      delay(2000),
      // retry(2),
      catchError(this.errorHandler.bind(this))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }
}
