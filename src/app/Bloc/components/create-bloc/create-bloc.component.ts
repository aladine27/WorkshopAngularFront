// create-bloc.component.ts

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Foyer } from 'src/app/models/foyer.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { Bloc } from 'src/app/models/bloc.model';

@Component({
  selector: 'app-create-bloc',
  templateUrl: './create-bloc.component.html',
  styleUrls: ['./create-bloc.component.css']
})
export class CreateBlocComponent implements OnInit {

  // Définissez la propriété foyers
  foyers: Foyer[] = [];
  bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capacityBloc: 0,
    foyer: { idFoyer: 0, nomFoyer: '' },
     // Assurez-vous d'avoir la propriété chambres dans le modèle Bloc
  };

  // Injectez le service et HttpClient dans le constructeur
  constructor(private blocService: BlocServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    // Appelez la méthode loadFoyers lors de l'initialisation du composant
    this.loadFoyers();

    // Initialisations supplémentaires si nécessaire
  }
  
  addBloc(): void {
    // Appelez la méthode du service pour ajouter le bloc
    this.blocService.addBloc(this.bloc).subscribe(
      (response: Bloc) => {
        console.log('Bloc ajouté avec succès:', response);
        // Vous pouvez ajouter ici la logique pour rediriger vers une autre page ou effectuer d'autres actions après l'ajout du bloc
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du bloc:', error);
        // Ajoutez ici la logique pour gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }
// create-bloc.component.ts

testBloc() {
  console.log(this.bloc); // Vérifiez le contenu dans la console
  this.blocService.addBloc(this.bloc).subscribe(
    // ...
  );
}

  loadFoyers() {
    // Utilisez votre service pour charger la liste des foyers
    this.blocService.getAllFoyers().subscribe(
      (data: Foyer[]) => {
        this.foyers = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des foyers', error);
      }
    );
  }
  

  private baseUrl = 'http://localhost:8089/springProjectTwin2/bloc';



  private handleError(error: any): Observable<never> {
    console.error('Erreur lors de la requête HTTP:', error);
    return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
  }

  // ... autres méthodes du composant
}
