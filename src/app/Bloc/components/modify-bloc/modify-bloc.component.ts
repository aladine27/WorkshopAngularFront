import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';

import { Foyer } from 'src/app/models/foyer.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-modify-bloc',
  templateUrl: './modify-bloc.component.html',
  styleUrls: ['./modify-bloc.component.css']
})
export class ModifyBlocComponent implements OnInit {
  bloc: Bloc = {} as Bloc;
  foyers: Foyer[] = [];

  constructor(
    private route: ActivatedRoute,
    private blocServiceService: BlocServiceService,
    private router: Router,
    private foyerService: FoyerService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');

      if (idString !== null && idString !== undefined) {
        const id = parseInt(idString, 10);

        if (!isNaN(id)) {
          this.fetchBloc(id);
        } else {
          console.error('Invalid bloc ID:', idString);
        }
      } else {
        console.error('No bloc ID provided.');
      }
    });

    // Load foyers
    this.foyerService.getAllFoyers().subscribe(
      data => {
        this.foyers = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des foyers:', error);
      }
    );
  }

  fetchBloc(id: number): void {
    this.blocServiceService.getBlocById(id).subscribe(
      (data: Bloc) => {
        this.bloc = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des détails du bloc:', error);
      }
    );
  }
 
  @Output() save = new EventEmitter<Bloc>();
  @Output() cancel = new EventEmitter<void>();
saveModification() {
    if (this.bloc) {
      this.save.emit(this.bloc);
    }
  }
 cancelModification() {
    this.cancel.emit();
  }

}



  

