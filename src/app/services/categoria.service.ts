import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(`${this.apiUrl}/api/categoria`);
  }
}
