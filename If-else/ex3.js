// Faça um programa que receba um número do usuário e informe se este número é par ou ímpar


let numero = prompt("Digite um numero");

if(numero % 2 == 0) {
    alert("Par");
} else if(numero % 2 == 1) {
    alert("impar");
} else {
    alert("Isso não é um numero")
}
