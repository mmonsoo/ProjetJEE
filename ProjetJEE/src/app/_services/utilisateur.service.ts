import { Injectable } from '@angular/core';
import { Utilisateur } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  utilisateurs = [new Utilisateur('Monsoor', 'Misharl', 'misharl.monsoor@gmail.com', '123456'),
  new Utilisateur('Pochard', 'Camille', 'camille.p@gmail.com', '123')];
  constructor() { }
}
