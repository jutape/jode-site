import { Component, OnInit } from '@angular/core';
import { Presenca } from '../models/Presenca.model';
import { PresencaService } from '../services/presenca.service';

@Component({
  selector: 'app-confirmacoes',
  templateUrl: './confirmacoes.component.html',
  styleUrls: ['./confirmacoes.component.css'],
})
export class ConfirmacoesComponent implements OnInit {
  presencas: Presenca[] = [];

  constructor(private presencaService: PresencaService) {}

  ngOnInit(): void {
    this.presencaService.listar().subscribe((presencas) => {
      this.presencas = presencas;
    });
  }

  toEmoji(value: boolean) {
    return value ? '✔️' : '❌';
  }
}
