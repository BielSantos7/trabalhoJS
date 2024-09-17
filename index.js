
let notas = [7.5, 8.0, 6.5, 9.0, 7.0];

console.log('Primeira nota:', notas[0]);
console.log('Última nota:', notas[notas.length - 1]);

notas.push(8.5);
notas.shift();
console.log('Array após adição e remoção:', notas);

notas.forEach(nota => {
    console.log('Nota:', nota);
});


let soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
let media = soma / notas.length;
console.log('Média das notas:', media);


let notasMaioresQueSete = notas.filter(nota => nota > 7);
console.log('Notas maiores que 7:', notasMaioresQueSete);


notas.sort((a, b) => a - b);
console.log('Notas ordenadas em ordem crescente:', notas);


let contemNota = notas.includes(6.5);
console.log('O array contém a nota 6.5?', contemNota);

let indiceNotaOito = notas.indexOf(8.0);
console.log('Índice da nota 8.0:', indiceNotaOito);


let notasQuadrado = notas.map(nota => nota * nota);
console.log('Notas elevadas ao quadrado:', notasQuadrado);
