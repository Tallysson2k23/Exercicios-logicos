//Ex: 14 - Crie um programa que inverta a ordem dos elementos em uma lista
const prompt = require("prompt-sync")()
console.log("Escreva item a item dando um enter após cada um. Escreva 'fim' quando concluir a lista")
var lista = []
var item = " ";
for(var ind=0;item!=="fim";ind++){
    item = prompt(" ");
    lista.push(item)
}
console.log("Resposta: ")
for(var i=lista.length-2;i>=0;i=i-1){
    console.log(lista[i])
}