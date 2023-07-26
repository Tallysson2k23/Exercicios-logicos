//EX: 9

const prompt = require("prompt-sync")();
var num1 = parseFloat (prompt ("Digite um número: "));
var prim = true
for (var i = 2;i<num1;i++){
    if (num1%i==0){
        prim=false
    }
}
if (prim===false){
    console.log("Não é primo");
}else{
    console.log("O numero é primo");
}