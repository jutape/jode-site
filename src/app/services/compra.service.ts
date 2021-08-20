import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { compraRequest } from '../models/compra.model';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  
  apiUrl = 'https://jode-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  comprar(compraRequest: compraRequest): Observable<any>{
    return this.http.post(`${ this.apiUrl }/api/compra`, compraRequest);
  }
}
