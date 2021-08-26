import { Categoria } from "./categoria.model";

export interface Presente {
    id: number;
    nome: string;
    preco: number;
    categoria: Categoria;
    disponibilidade: boolean;
    link: string;
    imagem: string;
}

export interface ProdutoRequest {
    nome: string;
    preco: number;
    categoria: number;
    disponibilidade: boolean;
    link: string;
    imagem: string;
    senha: string;
}