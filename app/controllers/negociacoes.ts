import { Negociacao } from "../models/negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []

    adicionar(negocicao: Negociacao){
        this.negociacoes.push(negocicao)
    }

    listar(): ReadonlyArray<Negociacao> { // Array somente leitura, sem pop, push..
        return this.negociacoes
    }
}