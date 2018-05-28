import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanteService } from '../_services/plante.service';
import { Plante, VersionElement } from '../_models';

@Component({
  selector: 'app-plante',
  templateUrl: './plante.component.html',
  styleUrls: ['./plante.component.css']
})
export class PlanteComponent implements OnInit {
  param: number;
  plante: Plante;
  booleanAjoutIdentification = false;
  booleanPanelInfo = true;
  tmpVersionElement: VersionElement;
  // Variable temporaire pour transmettre la valeur de l'objet version element
  tmpSelectElement: string;
  tmpvaleurElement: string;
  tmpCommentaire: string;
  constructor(private activatedRoute: ActivatedRoute, private planteService: PlanteService) { }
  ngOnInit() {
    // subscribe va affecter le param.id au param
    //Il est asynchrone, il part mais il ne revient pas, et donc le code continue à tourner. 
    this.activatedRoute.params.subscribe(p => this.loadMedecin(p['id']));
  }
  loadMedecin(id: string) {
    // On convertit la chaine de caractère en number
    this.param = +id;
    this.plante = this.planteService.getPlanteById(this.param);
  }
  addIdentification(): void {
    this.booleanAjoutIdentification = true;
    this.booleanPanelInfo = false;
  }
  displayPanelInformations(): void {
    this.booleanPanelInfo = true;
    this.booleanAjoutIdentification = false;
  }
  // On ajoute une version d'un élément
  // constructor(tmpvaleurElement = '', tmpCommentaire = '')
  addVersionElement(): void {
    console.log(this.tmpCommentaire);
    console.log(this.tmpvaleurElement);
    console.log(this.tmpSelectElement);
    this.plante.addVersionElement(new VersionElement(this.tmpvaleurElement, this.tmpCommentaire));
  }
  // key press ou input, appeler méthode filter sur liste et avec contains.
}
