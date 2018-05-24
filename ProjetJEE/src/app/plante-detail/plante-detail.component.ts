import { Component, OnInit, Input } from '@angular/core';
import { Plante } from '../_models';


@Component({
  selector: 'app-plante-detail',
  templateUrl: './plante-detail.component.html',
  styleUrls: ['./plante-detail.component.css']
})
export class PlanteDetailComponent implements OnInit {
  //Il reçoit l'objet plante pour l'afficher
  @Input() plante: Plante;
  constructor() { }

  ngOnInit() {
  }

}
