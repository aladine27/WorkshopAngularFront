import { Bloc } from './bloc.model'; // Assurez-vous que le chemin est correct

export interface Chambre {
  idChambre: number;
  numeroChambre: number;
  typeC: TypeChambre;
  reservations: Reservation[];
  bloc: Bloc;
}

export enum TypeChambre {
  // Définissez vos valeurs enum ici en fonction de TypeChambre
}

export interface Reservation {
  // Définissez les propriétés de l'entité Reservation si nécessaire
}