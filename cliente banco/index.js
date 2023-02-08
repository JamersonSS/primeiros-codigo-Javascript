import {cliente} from './Cliente.js'
import {contaCorrente} from './ContaCorrente.js'

const cliente1 = new cliente("Ricardo",11122233309);


const cliente2 = new cliente("Aline", 88822233309);

const conta1 = new contaCorrente( 1001, cliente1);

conta1.depositar(500);


const conta2 = new contaCorrente( 1001, cliente2);
let valor =200;
conta1.transferir(valor, conta2);


console.log(conta1);
console.log(conta2);
console.log(contaCorrente.numeroDeContas);
