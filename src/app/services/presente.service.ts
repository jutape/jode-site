import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presente } from '../models/presente.model';

@Injectable({
  providedIn: 'root'
})
export class PresenteService {

  apiUrl = 'http://ec2-3-137-176-93.us-east-2.compute.amazonaws.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Presente>> {
    return this.http.get<Array<Presente>>(`${this.apiUrl}/api/presente`);
  }

  getByCategoriaId(id: number): Observable<Array<Presente>>{
    return this.http.get<Array<Presente>>(`${this.apiUrl}/api/presente/categoria/${id}`);
  }

}
