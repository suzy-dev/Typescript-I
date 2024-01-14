import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputQtd = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.inputData = document.querySelector("#data");
    }
    adiciona() {
        const regexpExec = /-/g;
        const quantidade = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);
        const date = new Date(this.inputData.value.replace(regexpExec, ','));
        const negociacao = new Negociacao({ data: date, quantidade: quantidade, valor: valor });
        console.log(negociacao);
    }
}
