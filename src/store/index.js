import { createStore, applyMiddleware } from "redux"; //importa a função createStore e a applyMiddleware do pacote redux, necessárias para criar a store e aplicar middlewares a ela
import createSagaMiddleware from "redux-saga" //importa a função createSagaMiddleware do pacote redux-saga, necessaria para criar middleware do Redux saga
import rootReducer from "./modules/rootReducer"; //importa rootReducer do arquivo rootReducer.js
import rootSaga from "./modules/rootSaga"; //importa rootSaga do arquivo rootSaga.js
import { persistStore } from 'redux-persist' //importa a função persistStore do pacote, necessaria para persistir o estado da store Redux
import persistedReducers from './modules/reduxPersist' //importa persistedReducers do arquivo reduxPersist,js

const sagaMiddleware = createSagaMiddleware() //cria um middleware do Redux Saga usando a createSagaMiddleware do pacote

const store = createStore(persistedReducers(rootReducer), applyMiddleware(sagaMiddleware)) //cria a store Redux usando 'createStore', aí os reducers são combinados e envolvidos com a lógica de persistencia de estado usando o persistedReducers, vindo do arquivo 'reduxPersist.js'. Por fim o middleware do Redux Saga é aplicado a store usando o applyMiddleware(sagaMiddleware)

sagaMiddleware.run(rootSaga) //executa a raiz usando o run, assim permitindo que todos os sagas, contidos no 'rootSaga' sejam iniciados e começem a ouvir ações

export const persistor = persistStore(store) //exporta a persistor da store, que é necessário para persistir e rehidratar o estado da store entre as sessões
export default store //exporta a store

//Em resumo, este arquivo configura a store Redux, aplicando middlewares, combinando reducers, configurando a persistência de estado e executando sagas. Ele fornece a base central para o gerenciamento de estado em uma aplicação React/Redux.