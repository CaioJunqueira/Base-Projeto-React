//O arquivo rootReducer.js é responsável por combinar todos os reducers individuais em um único reducer raiz, que será passado para a store Redux.

import { combineReducers } from "redux"; //importa a função 'combineReducers' da biblioteca redux, e ela é usada para combinar multiplos reducers em um unico reducer raiz

import exampleReducer from './example/reducer' //importa exampleReducer do arquivo reducer.js

export default combineReducers({ //exportada a função vinda do Redux, a qual combina multiplos reducers
    example: exampleReducer, //passa o estado gerenciado pelo exampleReducer para a chave "example", aí quando ele atualiza seu estado, isso será armazeado dentro do estado global da chave "example"
})