// all-blocs.component.ts
import { Component, OnInit } from '@angular/core';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { FoyerService } from 'src/app/services/foyer.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';
@Component({
  selector: 'app-all-blocs',
  templateUrl: './all-blocs.component.html',
  styleUrls: ['./all-blocs.component.css']
})
export class AllBlocsComponent implements OnInit {
  blocs: any[] = [];
  
selectedBloc: Bloc | null = null; // Assurez-vous que selectedBloc est déclaré
  foyers: any[] = [];
  bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capacityBloc: 0,
    foyer: { idFoyer: 0, nomFoyer: '' },
     // Assurez-vous d'avoir la propriété chambres dans le modèle Bloc
  };

constructor(
    private router: Router,
    private blocServiceService: BlocServiceService,
    private foyerService: FoyerService
  ) {
    // ...
  }

  ngOnInit(): void {
    this.loadBlocs();
    this.loadFoyers();
  }

  loadBlocs() {
    this.blocServiceService.getAllBlocs().subscribe(
      data => {
        this.blocs = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des blocs:', error);
      }
    );
  }
  redirectToModifyBloc(id: number): void {
    // Rediriger vers la page de modification avec l'ID du bloc
   this.router.navigate(['/modify-bloc', id]);
  }

  loadFoyers() {
    this.foyerService.getAllFoyers().subscribe(
      data => {
        this.foyers = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des foyers:', error);
      }
    );
  }
DeleteBloc(bloc: Bloc) {
  const isConfirmed = confirm('Are you sure you want to delete this student?');
  if (isConfirmed) {
    this.blocServiceService.DeleteBloc(bloc.idBloc).subscribe(
      response => {
        // Remove the deleted student from the blocs array
        this.blocs = this.blocs.filter((e: Bloc) => e.idBloc !== bloc.idBloc);
        // Optionally, display a success message
      },
      error => {
        // Handle error
      }
    );
  }
}


}
