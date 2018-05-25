import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-identification-espece',
  templateUrl: './identification-espece.component.html',
  styleUrls: ['./identification-espece.component.css']
})
export class IdentificationEspeceComponent implements OnInit {
  pram:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // On récupère l'id de la plante
    this.activatedRoute.route.params.subscribe()
  }

}
