// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

let numerosperfeitos = []
let numero = 1


// While para parar o loop se tiver ja 4 elementos dentro do array
while (numerosperfeitos.length < 4) {
    let somaDosDivisores = 0;


    // inicializa o loop para verificar os divisores daquele numero
    for (let i = 1; i <= numero; i++) {
        // Aqui verificamos se o i é divisivel pelo nosso numero e adicionamos na variavel somaDosDivisores
        if (numero % i === 0) {
            somaDosDivisores += i;
        }
    }
    // Aqui verificamos se a somaDosDivisores é igual ao numeros,assim numero perfeito,adicionamos no fim do array de numeroPerfeitos
        if (somaDosDivisores === numero) {
            numerosperfeitos.push(numero);
    
}
    numero++;
}

console.log(numerosperfeitos)