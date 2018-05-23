import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-plantes',
  templateUrl: './liste-plantes.component.html',
  styleUrls: ['./liste-plantes.component.css']
})
export class ListePlantesComponent implements OnInit {
  // Objet javascript en format JSON 
  plante = { 'genre': '', 'ordre': '', 'famille': '' };
  // En typeScript, il ya Array et aussi les types génériques
  plantes = [{ 'genre': 'Passiflora', 'ordre': 'Malpighiales', 'famille': 'Passifloraceae' }, { 'genre': '	Valeriana', 'ordre': 'Dipsacales', 'famille': 'Caprifoliaceae' }];
  constructor() { }
  ngOnInit() {
  }
   // Ajoute dans la liste des plantes
  addPlante() {
    this.plantes.push(this.plante);
    this.plante = { 'genre': '', 'ordre': '', 'famille': '' };
  }

}
