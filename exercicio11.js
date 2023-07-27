
//EX: 11

const prompt = require ("prompt-sync")();
var lista = [];

for (i=0;num!=="fim";i++){
    var num = prompt("Digite uma numero: ");
    lista.push(num);
}
console.log("Sua lista: ",lista);

for (num of lista){
    if (num%2 === 0){
        console.log(num);
    }
}