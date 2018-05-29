import { Injectable } from '@angular/core';
import { Plante, VersionElement } from '../_models';
import { EventEmitter } from 'protractor';
@Injectable({
  providedIn: 'root'
})
// genre: string = '', ordre: string = '', famille: string = '', photo: string = '', paramOptionnel: string = '')
/* plantes = [new Plante('	Asclepias', 'Gentianales', 'Asclepiadacées', 'assets/images/0.jpg', 'Camille'),
new Plante('Passiflora', 'Malpighiales', 'Passifloraceae', 'assets/images/1.jpg', 'Pierre'),
new Plante('Valeriana', 'Dipsacales', 'Caprifoliaceae', 'assets/images/2.jpg', 'Gabriel'),
new Plante('Tanacetum', 'Asterales', 'Asteraceae', 'assets/images/3.jpg', 'Majid'),
new Plante('Mentha', 'Lamiales', 'Lamiaceae', 'assets/images/4.jpg', 'Vita')];
*/
export class PlanteService {
  plantes = [new Plante('	Asclepias', 'Gentianales', 'Asclepiadacées', 'assets/images/0.jpg', 'Camille'),
  new Plante('Passiflora', 'Malpighiales', 'Passifloraceae', 'assets/images/1.jpg', 'Pierre').addVersionElement(new VersionElement('Genre', 'Asclepias', 'Vive les plantes yo',5)).addVersionElement(new VersionElement('Genre', 'Carnivorus Loup Loup', 'Je suis sûr que c\'est une passiflore les gens',1)).addVersionElement(new VersionElement('Genre', 'Dodo planta', 'Bonjour, je me sens seul',3)),

  new Plante('Valeriana', 'Dipsacales', 'Caprifoliaceae', 'assets/images/2.jpg', 'Gabriel'),
  new Plante('Tanacetum', 'Asterales', 'Asteraceae', 'assets/images/3.jpg', 'Majid'),
  new Plante('Mentha', 'Lamiales', 'Lamiaceae', 'assets/images/4.jpg', 'Vita')];
  emitter;
  constructor() {
    //this.emitter = new EventEmitter<string>();
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
  getPlanteById(id: number): Plante {
    //for (let i = 0; i < this.plantes.length; i++) {
    //if (this.plantes[i].id === id) {
    //return this.plantes[i];
    //}
    //}
    //return null;
    //un lambda. Filter attends une fonction . if (f(this.liste[i])). Les lambda permettent de décalrer rapidement uje fonction. function(a){return a.id === id} renvoit un booléen.
    return this.plantes.filter(a => a.id === id)[0];
  }


}
