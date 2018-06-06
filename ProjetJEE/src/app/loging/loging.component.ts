import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  email: string;
  password: string;
  userConnected = false;

  constructor() { }
  ngOnInit() {
  }
  loging(): void {
    if (this.email === window.localStorage.getItem("email") && this.password === window.localStorage.getItem("password")) {
      console.log('Utilisateur connecté');
      this.userConnected = true;
    }
    else {
      this.userConnected = false;
      console.log('Utilisateur NON connecté');
    }


  }

}
