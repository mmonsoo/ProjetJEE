import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  // Objet javascript en format JSON 
  etudiant = { 'nom': 'Misharl', 'age': 42, 'saved': false };
  // En typeScript, il ya Array et aussi les types génériques
  etudiants = [{ 'nom': 'Yuna' }, { 'nom': 'willow' }, { 'nom': 'doudou' }, { 'nom': 'Jean-Michel' }];
  constructor() { }

  ngOnInit() {
  }
  // Une fonction en TypeScript , qui retourne un string
  getEtudiant(): string {
    return 'LOUUUL';
  }
  // Une fonction en TypeScript qui fait juste un console log
  getEtudiant2(): void {
    // Une variable d'instance. On met this à chaque fois, car c'est un attribut de classe.
    // console.log(this.etudiant.age);
    this.etudiant.nom = 'default';
  }
  saveEtudiant() {
    this.etudiant.saved = true;
  }

}
