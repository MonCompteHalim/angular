import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent} from './app.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthService } from './services/auth.service';
import { ViewerComponent } from './viewer/viewer.component';
import { AuGuarde } from './services/guards_auth';
import { ResultatComponent } from './resultat/resultat.component';
import { CreatCompteComponent } from './creat-compte/creat-compte.component';

const appRoutes: Routes = [
  {path:'home', component: ViewerComponent},
  {path:'Resultats', canActivate: [AuGuarde], component: ResultatComponent},
  {path:'authenPro', component: AuthViewComponent},
  {path:'creatCompte', component: CreatCompteComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    ViewerComponent,
    ResultatComponent,
    ResultatComponent,
    CreatCompteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuGuarde],
  bootstrap: [AppComponent]
})
export class AppModule { }
