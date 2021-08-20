import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Presenca, PresencaRequest } from '../models/Presenca.model';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  apiUrl = 'http://ec2-3-137-176-93.us-east-2.compute.amazonaws.com';

  constructor(private http: HttpClient) { }

  confirmar(presencaRequest: PresencaRequest): Observable<Presenca>{
    return this.http.post<Presenca>(`${ this.apiUrl }/api/presenca`, presencaRequest);
  }

}
