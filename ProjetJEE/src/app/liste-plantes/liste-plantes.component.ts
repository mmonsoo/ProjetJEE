import { Component, OnInit } from '@angular/core';
//J'ai fais un controle espace
import { Plante } from '../_models';

@Component({
  selector: 'app-liste-plantes',
  templateUrl: './liste-plantes.component.html',
  styleUrls: ['./liste-plantes.component.css']
})
export class ListePlantesComponent implements OnInit {
  // Objet javascript en format JSON 


  // En typeScript, il ya Array et aussi les types génériques
  edit = false;
  plantes = [new Plante('lulu', 'lulu', 'lulu'), new Plante('Passiflora', 'Malpighiales', 'Passifloraceae')];
  plante = new Plante();
  constructor() { }
  ngOnInit() {
  }
  // Ajoute dans la liste des plantes
  addPlante() {
    this.plantes.push(this.plante);
    this.plante = new Plante();
  }
  editionPlante(id: number) {
    this.plante = this.getPlanteById(id);
    this.edit = true;
  }
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
  editOver() {
    this.edit = false;
    this.plante = new Plante();
  }

}


