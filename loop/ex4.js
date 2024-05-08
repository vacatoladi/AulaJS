// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10


let num = parseFloat(prompt("Digite um número para saber sua tabuada até o 10"))

nummax = num * 10


for(num2 = num; num2 <= nummax; num2 += num) {
    console.log(num + " X " + (num2 / num) + " = " + num2)
}