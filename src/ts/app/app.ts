import Entrada from "../io/entrada";
import CalculoDois from "../negocio/calculoDois";
import Soma from "../negocio/soma";
import Subtracao from "../negocio/subtracao";

console.log(`Bem-vindo(a) a melhor calculadora/processadora do mundo`)

let execucao = true
let opcoesDoisNumeros = [1, 2, 3, 4]

while (execucao) {
    console.log(`------------------------------`);
    console.log(`Opções para dois números: `);
    console.log(`1 - Somar`);
    console.log(`2 - Subtrair`);
    console.log(`3 - Multiplicar`);
    console.log(`4 - Dividir`);
    console.log(`------------------------------`);
    console.log(`Opções para três números: `);
    console.log(`5 - Mostrar o menor`);
    console.log(`6 - Mostrar o maior`);
    console.log(`7 - Todos em ordem crescente`);
    console.log(`8 - Todos em ordem decrescente`);
    console.log(`------------------------------`);
    console.log(`0 - Sair`);
    console.log(`------------------------------`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    if (opcoesDoisNumeros.includes(opcao)) {
        let numero1 = entrada.receberNumero(`Por favor, digite o primeiro numero `)
        let numero2 = entrada.receberNumero(`Por favor, digite o segundo numero `)
        let calculo = new CalculoDois(numero1, numero2)
        switch (opcao) {
            case 1:
                calculo.aceitar(new Soma())
                break;
            case 2:
                calculo.aceitar(new Subtracao)
                break;
        }
    }else if(opcao == 0){
        execucao = false
        console.log(`Até mais!`);
        
    }else{
        console.log(`Operação não entendida :(`);
    }
}