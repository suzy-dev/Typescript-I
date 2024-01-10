import {Negociacao} from "../models/negociacao.js";

export class NegociacaoController {
    private inputData;
    private inputQtd;
    private inputValor;

    constructor(){
        this.inputQtd = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.inputData = document.querySelector("#data")
    }

    adiciona(){
       const negociacao = new Negociacao(
        this.inputData,
        this.inputQtd,
        this.inputValor)

        console.log(negociacao)
    }
}