import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanteService } from '../_services/plante.service';
import { Plante, VersionElement } from '../_models';
import { HttpClient } from '@angular/common/http';

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
  booleanIdentificationPanel = false;
  tmpVersionElement: VersionElement;
  // Variable temporaire pour transmettre la valeur de l'objet version element
  tmpSelectElement: string;
  tmpvaleurElement: string;
  tmpCommentaire: string;
  versionElementSelected: VersionElement;
  tmpSearchField: string;
  boolcsscard = false;
  listeVersion = [];
  liste = '';
  constructor(private activatedRoute: ActivatedRoute, private planteService: PlanteService, private http: HttpClient) { }
  ngOnInit() {
    // subscribe va affecter le param.id au param
    //Il est asynchrone, il part mais il ne revient pas, et donc le code continue à tourner. 
    this.activatedRoute.params.subscribe(p => this.loadPlante(p['id']));

    //setTimeout(() => { this.showLocation(); }, 3000);
    //console.log(this.lat);
  }
  loadPlante(id: string) {
    // On convertit la chaine de caractère en number
    this.param = +id;
    this.plante = this.planteService.getPlanteById(this.param);
  }
  addIdentification(): void {
    this.booleanAjoutIdentification = true;
    this.booleanPanelInfo = false;
    this.booleanIdentificationPanel = false;
  }

  displayPanelInformations(): void {
    this.booleanPanelInfo = true;
    this.booleanAjoutIdentification = false;
    this.booleanAjoutIdentification = false;

  }
  // On ajoute une version d'un élément
  // constructor(tmpvaleurMetadonnee = '', tmpvaleurElement = '', tmpCommentaire = '')
  addVersionElement(): void {
    console.log(this.tmpCommentaire);
    console.log(this.tmpvaleurElement);
    console.log(this.tmpSelectElement);
    //this.plante.addVersionElement(new VersionElement(this.tmpSelectElement, this.tmpvaleurElement, this.tmpCommentaire));
    this.planteService.getPlanteById(this.param).
      addVersionElement(new VersionElement(this.tmpSelectElement, this.tmpvaleurElement, this.tmpCommentaire));
    // on trie la liste selon le nombre de votes
    this.planteService.getPlanteById(this.param).sortListeVersionElement();
  }
  displayPanelIdentifications(): void {
    this.booleanIdentificationPanel = true;
    this.booleanPanelInfo = false;
    this.booleanAjoutIdentification = false;
    this.http.get('http://localhost:8080/allVersionElement/' + this.plante.id).subscribe(r => this.showReturn(r));
  }

  showReturn(r) {
    this.liste = JSON.stringify(r);
    this.listeVersion = JSON.parse(this.liste);
  }
  voter(v: VersionElement): void {
    // console.log(v.votes);
    // console.log(v.id);
    // on ajoute 1 au nombre de votes de la version Element
    v.votes += 1;
    // on trie la liste selon le nombre de votes
    this.planteService.getPlanteById(this.param).sortListeVersionElement();
    // On transforme en objet JSON notre objet Version Element ayant le plus de votes
    let bestVersionElement = this.planteService.getPlanteById(this.param).listeVersion[0];
    // Fait appelle au calcul et mettre à jour les informations de la photo
    this.updateInformations(bestVersionElement);
  }
  updateInformations(v: VersionElement): void {
    if (v.valeurMetadonnee === 'Espece') {
      this.plante.espece = v.valeurElement;
    }
    if (v.valeurMetadonnee === 'Genre') {
      this.plante.genre = v.valeurElement;
    }
    if (v.valeurMetadonnee === 'Famille') {
      this.plante.famille = v.valeurElement;
    }
    if (v.valeurMetadonnee === 'Ordre') {
      this.plante.ordre = v.valeurElement;
    }
    if (v.valeurMetadonnee === 'Classe') {
      this.plante.classe = v.valeurElement;
    }
    if (v.valeurMetadonnee === 'Embranchement') {
      this.plante.embranchement = v.valeurElement;
    }
  }
  filterMetadonnees(): void {
    this.boolcsscard = true;
    console.log(this.tmpSearchField);
  }
}

