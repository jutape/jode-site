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