const readline = require("readline-sync")

let nome = readline.question("Informe seu nickname: ")
let jogoFavorito = readline.question("Informe seu jogo favorito: ")
let pontuação = readline.questionInt("Sua pontuação: ")

console.log("====== PERFIL DO JOGADOR ======")
console.log(`Nickname do jogador: ${nome}`)
console.log(`Jogo mais jogado: ${jogoFavorito}`)
console.log(`Maior pontuação: ${pontuação}`)

