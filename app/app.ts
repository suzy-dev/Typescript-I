import Negociacao from './models/negociacao.js'

const negociacao = new Negociacao(new Date(), 2, 100)

console.log(negociacao.volume)
console.log(negociacao.valor)
console.log(negociacao.data)
console.log(negociacao.quantidade)

