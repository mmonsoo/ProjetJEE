import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanteService } from '../_services/plante.service';
import { Plante } from '../_models';

@Component({
  selector: 'app-plante',
  templateUrl: './plante.component.html',
  styleUrls: ['./plante.component.css']
})
export class PlanteComponent implements OnInit {
  param: number;
  plante: Plante;
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
}
