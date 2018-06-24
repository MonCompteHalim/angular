import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";


@Injectable()

export class AuGuarde implements CanActivate {

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     
     if(this.authGardServ.authServ===false) {
         return true;
     }else {
        alert('Merci de vous contecter pour accéder à cette Page!')
        this.routeGard.navigate(['/authenPro']); 
     }   
    }

constructor(private authGardServ: AuthService, private routeGard: Router){}
}