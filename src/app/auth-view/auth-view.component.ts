import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  constructor(private authentification: AuthService) { }

  authen: boolean;
  ngOnInit() {
    this.authen=this.authentification.authServ;
  }

  signIn(){
    this.authentification.signIn;
    this.authen=true;
  }

  signOut(){
    this.authentification.signOut;
    this.authen=false;
  }
}
