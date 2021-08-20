import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria.model';
import { compraRequest } from '../models/compra.model';
import { Presente } from '../models/presente.model';
import { CategoriaService } from '../services/categoria.service';
import { CompraService } from '../services/compra.service';
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
  estadoModal: string = 'opcoes';
  error = false;
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
    private compraService: CompraService
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

  comprarProduto(id: number) {
    if (this.formCompra.valid) {
      const { nome, email, celular, quantidade, parcelas } =
        this.formCompra.controls;
      let compraRequest: compraRequest = {
        nome: nome.value,
        celular: celular.value,
        email: email.value,
        quantidade: +quantidade.value,
        parcelas: +parcelas.value,
        idProduto: id,
      };
      this.mudarEstadoModal('loading');
      this.compraService.comprar(compraRequest).subscribe(
        () => {
          console.log('sucesso');
          this.mudarEstadoModal('sucesso');
        },
        () => {
          console.error('falha');
          this.mudarEstadoModal('falha');
        }
      );
    } else {
      this.error = true;
    }
  }

  mudarEstadoModal(novoEstado) {
    this.estadoModal = novoEstado;
  }

  openModal(id: string, disp: boolean) {
    if(disp) {
      this.modalService.open(id);
    }
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.estadoModal = 'opcoes';
    this.error = false;
    this.formCompra.reset();
    this.formCompra.controls.quantidade.setValue('');
    this.formCompra.controls.parcelas.setValue('');
  }

  controleProdutoPreco(preco) {
    const quant = this.formCompra.controls.quantidade.value;
    return +quant ? preco * +quant : preco;
  }
}
