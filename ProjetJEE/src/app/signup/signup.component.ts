import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // TODO user: Utilisateur; 
  email: string;
  password: string;
  constructor() { }
  ngOnInit() {
  }
  addUser(): void {
    window.localStorage.setItem("email", this.email);
    window.localStorage.setItem("password", this.password);
    console.log(window.localStorage.getItem("email"));
    console.log(window.localStorage.getItem("password"));
  }

}
