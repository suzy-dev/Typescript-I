export class NegociacaoControler {
    constructor() {
        this.inputQtd = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.inputData = document.querySelector("#data");
    }
    adiciona() {
        console.log(this.inputQtd);
        console.log(this.inputData);
        console.log(this.inputValor);
    }
}
