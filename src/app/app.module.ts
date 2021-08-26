import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresencaService } from './services/presenca.service';
import { PresentesComponent } from './presentes/presentes.component';
import { CategoriaService } from './services/categoria.service';
import { PresenteService } from './services/presente.service';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal.service';
import { LoadingComponent } from './loading/loading.component';
import { ConfirmacoesComponent } from './confirmacoes/confirmacoes.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    HistoriaComponent,
    RsvpComponent,
    CountdownComponent,
    PresentesComponent,
    ModalComponent,
    LoadingComponent,
    ConfirmacoesComponent,
    PaginaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PresencaService,
    CategoriaService,
    PresenteService,
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
