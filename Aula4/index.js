// NodeJS --> Interpretador de códeigo Javascript do lado do servidor
// VSCode --> Editor de Texto
// console.log() --> imprime na tela aquilo que está codificado entre (...)
// console.log() --> É uma função e tudo que estiver dentro dos (...) são considerados parâmetros da função
// Parâmetros são separados por "," */

console.log("Hello World");

// Declaração de variável

let minhaVariável = 5;

// Para fazer uma atribuição de variável é necessário usar o =
// Quando não for atribuído um valor à uma função ele é chamado de undefined
var minhaVariável2;
const cpf = "000.000.000-00";

/*A função const sempre deve tem que ser iniciada com algum valor 
Uma vez que o valor de const for definido, ele não pode ser alterado*/

// Variável --> Armazenamento de alguma informação de memória

/* No JS o tempo é contado por segundos, por isso ao determinar tempo para algo é necessário adicionar uma conta
 1 segundo = 1000ms
 
 para facilitar:
 
 const segundo = 1000;
 const minuto = 60*segundo;
 const hora = 60*minuto; */

/* let, var

 uma vez que o let foi definido seu valor pode ser alterado 
 
ho-instant

 let --> Escopo global
 var --> Escopo local ou de bloco*/

// Tudo aquilo que estiver dentro de {...} é chamado de escopo, e aquilo que for declarado dentro dele não pode ser usado fora
// Essa atribuição só é válida para o uso do let

/* Operadores matemáticos */

// Ctrl + D --> Seleciona todas as referências e as altera

const soma = 5 + 8;
const subtrair = 3 - 2;
const multiplicar = 3 * 2;
const divisao = 5 / 2; // Divisão exata 2.5
const divisaoModular = 5 % 2; //1
const exponenciacao = 2 ** 4; // 2*2*2*2
const raizQuadrada = 4 ** 0.5; // hack da raiz quadrada
const raizQuadrado = Math.sqrt(4); // Raiz usando Math
const pow = Math.pow(2, 4); // Exponenciação usando Math
console.log(soma);
console.log(subtrair);
console.log(multiplicar);
console.log(divisao);
console.log(divisaoModular);
console.log(exponenciacao);
console.log(raizQuadrada);
console.log(raizQuadrado);
console.log(pow);

// Tipos de dados primitivos no JS
// Number -> Número -> Inteiro ou Decimal
let numero = 5.2
// Booleano -> Verdadeiro ou fal -> true ou false
let temPlano = false;
//String ou Texto -> Sequencia de caracteres

// Template strings
let texto = 'abc';
