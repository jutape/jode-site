import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presente, ProdutoRequest } from '../models/presente.model';

@Injectable({
  providedIn: 'root'
})
export class PresenteService {

  apiUrl = 'https://jode-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Presente>> {
    return this.http.get<Array<Presente>>(`${this.apiUrl}/api/presente`);
  }

  getByCategoriaId(id: number): Observable<Array<Presente>>{
    return this.http.get<Array<Presente>>(`${this.apiUrl}/api/presente/categoria/${id}`);
  }

  add(produtoRequest: ProdutoRequest) {
    return this.http.post<Array<Presente>>(`${this.apiUrl}/api/presente`, produtoRequest);
  }

  edit(produtoRequest: ProdutoRequest, id: number) {
    return this.http.put<Array<Presente>>(`${this.apiUrl}/api/presente/${id}`, produtoRequest);
  }

  remover(id: number) {
    return this.http.delete(`${this.apiUrl}/api/presente/${id}`);
  }

}
