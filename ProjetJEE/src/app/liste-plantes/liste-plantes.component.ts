import { Component, OnInit } from '@angular/core';
//J'ai fais un controle espace
import { Plante } from '../_models';
import { PlanteService } from '../_services/plante.service';

@Component({
  selector: 'app-liste-plantes',
  templateUrl: './liste-plantes.component.html',
  styleUrls: ['./liste-plantes.component.css']
})
export class ListePlantesComponent implements OnInit {
  // Objet javascript en format JSON 
  // En typeScript, il ya Array et aussi les types génériques
  edit = false;
  // plantes = [new Plante('lulu', 'lulu', 'lulu'),
  // new Plante('Passiflora', 'Malpighiales', 'Passifloraceae')];
  plantes;
  plante = new Plante();
  // Pour savoir quelle plante on a choisi
  selectedPlante: Plante;
  // Ici on indique là un service de type planteservice
  // Avec le private, on crée un attribut planteService et on pourra l'appeller avec this.planteService  dans la classe
  constructor(private planteService: PlanteService) {
  }
  // Après l'initialisation du composant, avec le constructzur que l'on doit laisser vide, il fait ngOnInit.
  // ngOnInit, c'est un hook, un lifecycle hooks.
  ngOnInit() {
    this.plantes = this.planteService.getPlantes();

    //this.planteService.getEvent().subscribe(console.log('ok'));
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

  onSelect(plante: Plante): void {
    this.selectedPlante = plante;
  }

}


