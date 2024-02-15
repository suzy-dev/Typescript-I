import {Negociacao} from "../models/negociacao.js";
import { Negociacoes } from "./negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQtd: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()

    constructor(){
        this.inputQtd = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.inputData = document.querySelector("#data")
    }

    createNegociacao(): Negociacao {
        const regexpExec = /-/g
        const quantidade = parseInt(this.inputQtd.value)
        const valor = parseFloat(this.inputValor.value)
        const date = new Date(this.inputData.value.replace(regexpExec,','))
        return new Negociacao(
            { data: date, quantidade: quantidade, valor: valor })
    }

    adiciona(): void {
        const negociacao = this.createNegociacao()
        this.negociacoes.adicionar(negociacao)
        console.log(this.negociacoes.listar())
        this.clearForm()
    }

    clearForm(): void{
        this.inputData.value = ''
        this.inputQtd.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}