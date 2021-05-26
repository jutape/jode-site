import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component';
import { InicioComponent } from './inicio/inicio.component';
import { RsvpComponent } from './rsvp/rsvp.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'historia', component: HistoriaComponent },
  {path: 'rsvp', component: RsvpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
