import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthService } from './services/auth.service';
import { ViewerComponent } from './viewer/viewer.component';

const appRoutes: Routes = [
  {path:'authenPro', component: AuthViewComponent},
  {path:'home', component: ViewerComponent},
  {path:'', component: ViewerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
