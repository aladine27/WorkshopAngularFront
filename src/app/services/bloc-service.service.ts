import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bloc } from '../models/bloc.model';
import { Foyer } from '../models/foyer.model';

@Injectable({
  providedIn: 'root'
})
export class BlocServiceService {

  private baseUrl = 'http://localhost:8089/springProjectTwin2/bloc';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/all`);
  }
  getBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(this.baseUrl);
  }


  addBloc(bloc: Bloc): Observable<Bloc> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Bloc>(`${this.baseUrl}/add`, bloc, { headers })
      .pipe(
        catchError(this.handleError)
      );
    
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('Une erreur côté client a eu lieu:', error.error.message);
    } else {
      // Le backend a retourné une réponse d'erreur
      console.error(
        `Code d'erreur côté serveur: ${error.status}, ` +
        `Erreur : ${error.error}`);
    }

    // Renvoyer une observable avec un message d'erreur convivial
    return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
  }
   // Ajoutez la méthode getAllFoyers
  getAllFoyers(): Observable<Foyer[]> {
    // Assurez-vous que le chemin d'accès à votre service Foyer est correct
    return this.http.get<Foyer[]>(`http://localhost:8089/springProjectTwin2/foyer/all`);
  }
  getBlocById(id: number): Observable<Bloc> {
  const url = `${this.baseUrl}/get/${id}`;
  return this.http.get<Bloc>(url);
}


DeleteBloc(id: Number): Observable<void> {
  return this.http.delete<void>(`{this.baseUrl}/remove/${id}`);

}
modifyBloc(bloc: Bloc): Observable<Bloc> {
    const url = `${this.baseUrl}/modify/${bloc.idBloc}`;
    return this.http.put<Bloc>(url, bloc);
  }



}
