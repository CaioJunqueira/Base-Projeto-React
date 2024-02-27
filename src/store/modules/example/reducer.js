//O arquivo reducer.js é responsavel por definir o reducer do Redux, que é uma função que especifica como o estado da aplicação é atualizado em resposta as ações despachadas

import * as types from '../types' //importando tudo do types.js

const initialState = { //O objeto initialState representa o estado inicial da parte de estado que o reducer é responsavel por gerenciar
    botaoClicado: false, //E no caso, ele tem uma propriedade 'botaoClicado' inicializada como false, assim fazendo com que o botao nao venha de primeira com a ação true, ou seja, que veio clicado por padrão
}

export default function(state = initialState, action) { //exporta a função que é um reducer do Redux, e ela recebe o argumento state que é o initialState, que vem com a propriedade 'false' do botaoClicado, e recebe 'action' que representa a ação despachada para atualizar o estado, e essa ação é um objeto que possui a propriedade 'type'
    switch (action.type){ //inicia o bloco switch case, que verifica o tipo da ação despachada usando a propriedade type da ação, aí com base no tipo da ação, diferentes 'cases' serão executados
        case types.BOTAO_CLICADO_SUCCESS: { //Esse primeiro case recebe 'BOTAO_CLICADO_SUCCESS' importando do types
            console.log('Sucesso')
            const newState = {...state} //Como estado(state) é imutavel, é criado uma const de novo estado(newState), e ele recebe tudo do atual state usando o spread operator
            newState.botaoClicado = !newState.botaoClicado //O valor da const de novo estado(newState).botaoClicado (que começa sendo false) recebe o inverso dela com '!', assim invertendo o valor da propriedade 'botaoClicado'
            return newState //retorna um novo estado
        }

        case types.BOTAO_CLICADO_FAILURE: { //case que recebe o type de FAILURE do button
            console.log('Deu erro')
            return state //diferente do case de sucesso, que alteram o estado, tanto o case de failure, quanto o de request, não alteram o estado, assim somente retornando state
        }

        case types.BOTAO_CLICADO_REQUEST: {
            console.log('Estou fazendo a requisição')
            return state
        }

        default:{ //caso padrão do switch, assim caso nenhuma ação corresponder a nenhum dos casos anteriores, o reducer simplesmente retorna o estado atual sem fazer nenhuma alteração
            return state
        }

    }
}