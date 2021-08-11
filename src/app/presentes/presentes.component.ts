import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria.model';
import { Presente } from '../models/presente.model';
import { CategoriaService } from '../services/categoria.service';
import { ModalService } from '../services/modal.service';
import { PresenteService } from '../services/presente.service';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css'],
})
export class PresentesComponent implements OnInit {
  categorias: Categoria[] = [];
  produtos: Presente[] = [];
  categoriaSelecionada: number;
  estadoModal: string = "opcoes";
  formCompra = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required]),
    parcelas: new FormControl('', [Validators.required]),
    quantidade: new FormControl('', [Validators.required]),
  });

  constructor(
    private categoriaService: CategoriaService,
    private presenteService: PresenteService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.getAllCategorias();
    this.getAllPresentes();
  }

  getAllCategorias() {
    this.categoriaService.getAll().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  getAllPresentes() {
    this.presenteService.getAll().subscribe((presentes) => {
      this.categoriaSelecionada = undefined;
      this.produtos = presentes;
    });
  }

  getPresentesByCategoria(id: number) {
    this.presenteService.getByCategoriaId(id).subscribe((presentes) => {
      this.categoriaSelecionada = id;
      this.produtos = presentes;
    });
  }

  mudarEstadoModal(novoEstado) {
    this.estadoModal = novoEstado;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
      this.estadoModal = "opcoes";
      this.formCompra.reset();
      this.formCompra.controls.quantidade.setValue('');
      this.formCompra.controls.parcelas.setValue('');
  }
}
