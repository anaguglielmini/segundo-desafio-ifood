// declarando variáveis de funções para usar por fora

// variável saldoVitorias é o retorno do que acontece na função subtracao com os números 10 e 5
let saldoVitorias = subtracao(10,5)

// declarando função para fazer a subtração e encontrar o saldo de Rankeadas
function subtracao(vitoria , derrota){
    return vitoria - derrota
}

// declarando função para definir o nível da Ranked do jogador
function defineNivel(ranked){
    if(ranked <= 10 ){
        nivel = "Ferro"
    }else if(ranked >=11 && ranked <= 20){
        nivel = "Bronze"
    }else if(ranked >=21 && ranked <= 50){
        nivel = "Prata"
    }else if(ranked >= 51 && ranked <= 80){
        nivel = "Outro"
    }else if(ranked >= 81 && ranked <= 90){
        nivel = "Lendário"
    }else if(ranked >= 91 && ranked <= 100){
        nivel = "Lendário"
    }else if(ranked >= 101){
        nivel = "Imortal"
    }else{
        nivel = "Nenhum"
    }
    console.log("O Herói tem de saldo de " + ranked + " vitórias e está no nível de " + nivel)
}

// laço de repetição para poder passar em todos os níveis 
do{
    // ao chamar a função defineNivel, eu passo que o valor a ser substituido na ranked será o que obtivemos 
    // na função subtracao que por fora é nomeada como saldoVitorias
    // e em seguida acrescentamos mais 5 nesse valor para mudar o nível da Ranked
    defineNivel(saldoVitorias)
    saldoVitorias += 5
} while(saldoVitorias <= 105)

// - Variáveis: variável do retorno da função e variáveis internas de funções
// - Operadores: &&, +=, <=, >=
// - Laços de repetição: do while
// - Estruturas de decisões: if else if
// - Funções: função da subtração para definir o saldo de Rankeadas e outra para definir o nível das rankeadas
