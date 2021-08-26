import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacoesComponent } from './confirmacoes/confirmacoes.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PresentesControlComponent } from './presentes-control/presentes-control.component';

const routes: Routes = [
  {path: '', component: PaginaInicialComponent },
  {path: 'confirmacoes', component: ConfirmacoesComponent },
  {path: 'presentes', component: PresentesControlComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
