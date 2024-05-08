// Imprimir os primeiros 10 números da sequência de Fibonacci.

let num1 = 1, num2 = 1, num;

for (let contagem = 1; contagem <= 10; contagem++) {
    console.log(num1);
    num = num1 + num2;
    num1 = num2;
    num2 = num;
    } 