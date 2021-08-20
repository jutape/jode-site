import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl = 'https://jode-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(`${this.apiUrl}/api/categoria`);
  }
}
