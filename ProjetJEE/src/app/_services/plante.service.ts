import { Injectable } from '@angular/core';
import { Plante } from '../_models';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PlanteService {
  plantes = [new Plante('lulu', 'lulu', 'lulu'),
  new Plante('Passiflora', 'Malpighiales', 'Passifloraceae')];
  emitter;
  constructor() {
    //this.emitter = new EventEmitter <string> ();
    // Envoit régulièrement une fonction toutes les , on fait un next , un nouvel énevement, toutes les 1 s, il envoit un nombre au hsard
    //setInterval(() => this.emitter.next(Math.random()), 1000);
    // Un service qui va chercher sur le serveur spring nos plantes.
  }
  getPlantes(): Plante[] {
    return this.plantes;
  }
  //getEvent() {
    //return this.emitter;
  //}
}


 }