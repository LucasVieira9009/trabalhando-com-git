const readline = require("readline-sync")

let NomeDoCliente = readline.question("Informe seu nome: ")
let NomeDoPrato = readline.question("Informe seu pedido: ")
let ValorDoPrato = readline.questionFloat("Informe o valor do prato: ")

console.log("====== RESUMO DO PEDIDO ======")
console.log(`Cliente: ${NomeDoCliente}`)
console.log(`Prato escolhido: ${NomeDoPrato}`)
console.log(`Valor: ${ValorDoPrato}`)












