export class AuthService {
  
static authServ;

authServ = false;


signIn(){
    this.authServ=true;
}

signOut(){
 this.authServ=false;
}
}

