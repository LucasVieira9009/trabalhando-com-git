const readline = require("readline-sync")

let totalDePaginas = 300

let qtdQuantasPaginas = readline.questionInt("informe a quantidade de paginas lidas: ")

let percentual = (qtdQuantasPaginas / totalDePaginas) * 100


console.log("---------------------")
console.log("=     RESULTADO     =")
console.log("---------------------")

console.log(`O usuário leu ${percentual}% do livro`)