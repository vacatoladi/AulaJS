// Faça um programa que receba 4 notas de um aluno, calcule e imprima a 
// média aritmética das notas e a mensagem de APROVADO para média superior 
// ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de 
// REPROVADO para média inferior a 5,0.

let nota1 = parseFloat( prompt("Digite a 1 nota") )
let nota2 = parseFloat( prompt("Digite a 2 nota") )
let nota3 = parseFloat( prompt("Digite a 3 nota") )
let nota4 = parseFloat( prompt("Digite a 4 nota") )

var media = (nota1 + nota2 + nota3 + nota4)/4

if (media >= 7) {
    alert("APROVADO");
} else if (media >= 5) {
    alert("RECUPERAÇÃO");
} else {
    alert("REPROVADO");
}