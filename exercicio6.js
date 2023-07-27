
//EX: 6 -Escreva um programa que calcule a média de très números informados pelo usuário

    const prompt = require("prompt-sync")();
    var num1 = parseFloat (prompt ("Digite sua nota 1: "));
    var num2 = parseFloat (prompt ("Digite sua nota 2: "));
    var num3 = parseFloat (prompt ("Digite sua nota 3: ") );
 console.log("Sua media é:" ,(num1+num2+num3)/3);