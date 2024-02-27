//Este arquivo reduxPersist.js exporta uma função que recebe os reducers da aplicação como argumento e retorna um novo conjunto de reducers que incluem a persistência de estado usando o redux-persist.

import storage from "redux-persist/lib/storage" //importa o mecanismo de armazenamento 'storage' que o redux-persist usará para armazenar o estado persistido, e no caso 'redux-persist/lib/storage' é o armazenamento padrão que usa o localStorage do navegador
import { persistReducer } from "redux-persist" //import a função 'persistReducer' que é usada para criar um novo reducer que inclui logica de persistencia de estado

export default reducers => { //exporta a função reducers
    const persistedReducers = persistReducer({ //define a const "persistedReducers" como sendo uma função que recebe um objeto com varias chaves
        key: 'REACT-BASE', //sendo 'key' uma chave unica usada para identificar o estado persistido, no caso 'REACT-BASE'
        storage, //storage é o mecanismo de armazenamento a ser usado, no caso localStorage
        whitelist: ['example'], //array de nomes de reducers que devem ser persistidos, no caso apenas 'example' é persistido
    }, reducers)

    return persistedReducers //retorna os reducers com a a logica de persistencia de estado aplicada
}

//Em resumo, reduxPersist.js cria e exporta uma função que envolve os reducers da aplicação com a lógica de persistência de estado fornecida pelo redux-persist, permitindo que certos reducers sejam armazenados localmente e persistidos entre as sessões do usuário.