export class AuthService {

authServ =false;

signIn(){
    this.authServ=true;
}

signOut(){
 this.authServ=false;
}
}

