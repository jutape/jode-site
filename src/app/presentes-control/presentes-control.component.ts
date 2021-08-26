import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria, CategoriaRequest } from '../models/categoria.model';
import { Presente, ProdutoRequest} from '../models/presente.model';
import { CategoriaService } from '../services/categoria.service';
import { ModalService } from '../services/modal.service';
import { PresenteService } from '../services/presente.service';

@Component({
  selector: 'app-presentes-control',
  templateUrl: './presentes-control.component.html',
  styleUrls: ['./presentes-control.component.css'],
})
export class PresentesControlComponent implements OnInit {
  produtos: Presente[] = [];
  estadoModal: string;
  categorias: Categoria[];
  formEditar = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    disponibilidade: new FormControl('', [Validators.required]),
    imagem: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });
  formProdutoNovo = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    disponibilidade: new FormControl('', [Validators.required]),
    imagem: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });
  formCategoria = new FormGroup({
    categoria: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
  });

  constructor(
    private modalService: ModalService,
    private presenteService: PresenteService,
    private categoriaService: CategoriaService,
  ) {}

  ngOnInit(): void {
    this.getAllPresentes();
    this.getAllCategorias();
  }

  editarProduto(produto: Presente) {
    this.formEditar.controls.nome.setValue(produto.nome);
    this.formEditar.controls.disponibilidade.setValue(+produto.disponibilidade);
    this.formEditar.controls.imagem.setValue(produto.imagem);
    this.formEditar.controls.link.setValue(produto.link);
    this.formEditar.controls.preco.setValue(produto.preco);
    this.formEditar.controls.categoria.setValue(produto.categoria.id);
    this.openModal('select-edit-option-' + produto.id, 'editar');
  }

  enviarEdicaoProduto(produto) {

    let edicaoRequest: ProdutoRequest = {
      nome: this.formEditar.controls.nome.value,
      disponibilidade: !!+this.formEditar.controls.disponibilidade.value,
      imagem: this.formEditar.controls.imagem.value,
      link: this.formEditar.controls.link.value,
      preco: this.formEditar.controls.preco.value,
      categoria: +this.formEditar.controls.categoria.value,
      senha: this.formEditar.controls.senha.value,
    };
    

    this.presenteService.edit(edicaoRequest, produto.id)
      .subscribe(() => {
        window.location.reload();
      });
  }

  adicionarProduto() {
    let novoProduto: ProdutoRequest = {
      nome: this.formProdutoNovo.controls.nome.value,
      disponibilidade: !!+this.formProdutoNovo.controls.disponibilidade.value,
      imagem: this.formProdutoNovo.controls.imagem.value,
      link: this.formProdutoNovo.controls.link.value,
      preco: this.formProdutoNovo.controls.preco.value,
      categoria: +this.formProdutoNovo.controls.categoria.value,
      senha: this.formProdutoNovo.controls.senha.value,
    };
    this.presenteService.add(novoProduto)
      .subscribe(() => {
        window.location.reload();
      });
  }
  
  adicionarCategoria() {
    let novaCategoria: CategoriaRequest = {
      titulo: this.formProdutoNovo.controls.categoria.value,
      senha: this.formProdutoNovo.controls.senha.value,
    };
    this.categoriaService.add(novaCategoria)
      .subscribe(() => {
        window.location.reload();
      });
  }

  removerProduto(produtoId: number) {
    this.presenteService.remover(produtoId)
      .subscribe(() => {
        window.location.reload();
      });
  }

  openModal(id: string, estado: string) {
    this.estadoModal = estado;
    this.modalService.open(id);
  }

  getAllCategorias() {
    this.categoriaService.getAll().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  getAllPresentes() {
    this.presenteService.getAll().subscribe((presentes) => {
      this.produtos = presentes;
    });
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.formEditar.reset()
    this.formProdutoNovo.reset()
    this.formCategoria.reset()
  }
}
