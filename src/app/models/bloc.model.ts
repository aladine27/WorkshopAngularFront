

// bloc.model.ts
import { Foyer } from './foyer.model'; // Assurez-vous que le chemin est correct
import { Chambre } from './chambre.model';

export interface Bloc {
  idBloc: number;
  nomBloc: string;
  capacityBloc: number;
  foyer: { idFoyer: number; nomFoyer: string };  // Make sure to ithe correct Foyer model
// Make sure to import the correct Chambre model

}
