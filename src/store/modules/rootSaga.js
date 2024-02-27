//O arquivo rootSaga.js é responsável por combinar todos os sagas individuais em um único saga raiz, que será executado para lidar com todas as ações assíncronas na aplicação.


import { all } from "redux-saga/effects"; //importa a função all da biblioteca redux-saga, e essa função é usada para executar varios efeitos em paralelo
import example from './example/sagas' //importa example direto do arquivo sagas.js

export default function* rootSaga(){ //exporta função geradora
    return yield all([example]) // retorna o yield, que pausa a execução até que os sagas sejam executados, e no caso usa o efeito all para executar o saga 'example', e o efeito all faz com que multiplos sagas sejam executados em paralelo
}