import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputQtd = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.inputData = document.querySelector("#data");
    }
    createNegociacao() {
        const regexpExec = /-/g;
        const quantidade = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);
        const date = new Date(this.inputData.value.replace(regexpExec, ','));
        return new Negociacao({ data: date, quantidade: quantidade, valor: valor });
    }
    adiciona() {
        const negociacao = this.createNegociacao();
        console.log(negociacao);
        this.clearForm();
    }
    clearForm() {
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
