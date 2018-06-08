import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plante, Utilisateur } from '../_models';
import { PlanteService } from '../_services/plante.service';

@Component({
  selector: 'app-ajout-identification',
  templateUrl: './ajout-identification.component.html',
  styleUrls: ['./ajout-identification.component.css']
})
export class AjoutIdentificationComponent implements OnInit {
  utilisateur: Utilisateur;
  newplante: Plante;
  tmpSelectElement: string;
  tmpvaleurElement: string;
  photo: string;


  constructor(private http: HttpClient, private planteService: PlanteService) { }

  ngOnInit() {
  }

  addPlante() {
    // TODO this.http.get('http://localhost:8080/allplantes').subscribe(r => this.showReturn(r));
    console.log(this.photo);
    console.log(this.tmpSelectElement);
    console.log(this.tmpvaleurElement);

    //TODO RECUPERER UTILI CONNECTE On crée un utilisateur pour la nouvelle entrée plante à ajouter
    this.utilisateur = new Utilisateur('Doudou', 'Jean-Michel', 'jm-doudou@gmail.com', '123');
    // On crée l'objet plante et on lui assigne l'utilisateur connecté, JM DOUDOU en l'occurence.
    this.newplante = new Plante('', '', '', this.photo, this.utilisateur.nom).setIdUtilisateur(this.utilisateur);
    if (this.tmpSelectElement === 'Espece') {
      this.newplante.espece = this.tmpvaleurElement;
    }
    if (this.tmpSelectElement === 'Genre') {
      this.newplante.genre = this.tmpvaleurElement;
    }
    if (this.tmpSelectElement === 'Famille') {
      this.newplante.famille = this.tmpvaleurElement;
    }
    if (this.tmpSelectElement === 'Ordre') {
      this.newplante.ordre = this.tmpvaleurElement;
    }
    if (this.tmpSelectElement === 'Classe') {
      this.newplante.classe = this.tmpvaleurElement;
    }
    if (this.tmpSelectElement === 'Embranchement') {
      this.newplante.embranchement = this.tmpvaleurElement;
    }
    const ob = JSON.stringify(this.newplante);
    console.log(ob);
    //this.planteService.addPlantes(this.newplante);
    const req = this.http.post('http://localhost:8080/addplante', ob
      /*
        {
          'genre': 'lol2',
          'ordre': 'lol2',
          'famille': 'lol2',
          'photo': 'assets/images/2.jpg',
          'utilisateur': 'lol2',
          'classe': 'lol2',
          'idUtilisateur': { 'id': 5, 'nom': 'Pochard', 'prenom': 'Camille', 'login': 'camille.p@gmail.com', 'password': '123' }
        }
        */

    ).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
    this.newplante = new Plante();
  }

}
