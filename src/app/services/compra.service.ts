import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { compraRequest } from '../models/compra.model';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  
  apiUrl = 'http://ec2-3-137-176-93.us-east-2.compute.amazonaws.com';

  constructor(private http: HttpClient) {}

  comprar(compraRequest: compraRequest): Observable<any>{
    return this.http.post(`${ this.apiUrl }/api/compra`, compraRequest);
  }
}
