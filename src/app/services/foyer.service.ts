// foyer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foyer } from '../models/foyer.model';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  private baseUrl = 'http://localhost:8089/springProjectTwin2/foyer';

  constructor(private http: HttpClient) { }

  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/all`);
  }
}

