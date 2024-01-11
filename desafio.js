//variaveis
let nome = "Amanda"
let pontosDeExperiencia = 8000
let nivelDoHeroi

//condiçoes
if (pontosDeExperiencia <= 1000) {
    nivelDoHeroi = "Ferro"
}
else if (pontosDeExperiencia >1000 && pontosDeExperiencia <= 2000){
    nivelDoHeroi = "Bronze"
}
else if (pontosDeExperiencia > 2000 && pontosDeExperiencia <= 5000){
    nivelDoHeroi = "Prata"
}
else if (pontosDeExperiencia > 5000 && pontosDeExperiencia <= 7000){
    nivelDoHeroi = "Ouro"
}
else if (pontosDeExperiencia > 7000 && pontosDeExperiencia <= 8000){
    nivelDoHeroi = "Platina"
}
else if (pontosDeExperiencia > 8000 && pontosDeExperiencia <= 9000){
    nivelDoHeroi = "Ascendente"
}
else if (pontosDeExperiencia > 9000 && pontosDeExperiencia <= 10000){
    nivelDoHeroi = "Imortal"
}
else if (pontosDeExperiencia >= 10001){
    nivelDoHeroi = "Radiante"
}

//mensagem de saída
console.log("O Herói de nome " + nome + " está no nível de " + nivelDoHeroi)