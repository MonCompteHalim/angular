import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  constructor(private authentification: AuthService) { }
  
  @Input() mail: string;

  authen: boolean;
  authtest=this.authentification.authServ;
  
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
