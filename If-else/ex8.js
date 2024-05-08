// Escreva um programa que solicita ao usuário seu peso em quilogramas
// e sua altura em metros. Em seguida, calcule o Índice de Massa Corporal 
// (IMC) utilizando a fórmula: IMC = peso / (altura * altura). Com base 
// no resultado, exiba uma mensagem indicando a faixa de peso em que o 
// usuário se encontra, de acordo com a tabela a seguir:

// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3


let altura = parseFloat(prompt("Digite sua altura em metros (Ex: '1.70')"))
let peso = parseFloat(prompt("Digite seu peso"))

let imc = peso / (altura * altura)

console.log(imc)

if (imc >= 40) {
    alert("Obesidade Grau 3")
} else if (imc >= 35) {
    alert("Obesidade grau 2")
} else if (imc >= 30) {
    alert("Obesidade grau 1")
} else if (imc >= 25) {
    alert("Sobrepeso")
} else if (imc >= 18.5) {
    alert("Peso normal")
} else {
    alert("Abaixo do peso")
}