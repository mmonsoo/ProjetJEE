import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// On importe la librairie
import { FormsModule } from '@angular/forms';
import { ListePlantesComponent } from './liste-plantes/liste-plantes.component';
import { PlanteDetailComponent } from './plante-detail/plante-detail.component';
import { PlanteService } from './_services/plante.service';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationEspeceComponent } from './identification-espece/identification-espece.component';
import { PlanteComponent } from './plante/plante.component';
import { LogingComponent } from './loging/loging.component';
import { SignupComponent } from './signup/signup.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
// /locahost:4200/hello
const appRoutes: Routes = [{ path: '', component: ListePlantesComponent },
{ path: 'listeplantes', component: ListePlantesComponent },
{ path: 'plante/:id', component: PlanteComponent }, { path: 'loging', component: LogingComponent },
{ path: 'login', component: LogingComponent }, { path: 'signup', component: SignupComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    ListePlantesComponent,
    PlanteDetailComponent,
    IdentificationEspeceComponent,
    PlanteComponent,
    LogingComponent,
    SignupComponent,
    UtilisateurComponent
  ],
  // On a importé RouterModule.forRoot(appRoutes) pour les urls qui vont changer en fonction des url
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule
  ],
  providers: [PlanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
