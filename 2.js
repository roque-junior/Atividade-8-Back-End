// 2. Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.

const Vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let soma = 0;

for (let index = 0; index < Vetor.length; index++) {
    soma += Vetor[index]
    console.log (soma)  
} 
