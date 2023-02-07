import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, throwError, tap } from 'rxjs';
import { IProduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  products: IProduct[] = []

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // params:new HttpParams().append('limit', 5)
      params: new HttpParams({
        fromObject: { limit: 5 },
      }),
    }).pipe(
      delay(2000),
      // retry(2),
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
    );
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(tap(p => this.products.push(p)))
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handler(error.message)
    return throwError(() => error.message)
  }
}
