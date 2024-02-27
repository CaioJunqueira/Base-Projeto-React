import { call, put, all, takeLatest } from "redux-saga/effects"; //importa efeitos e funções principais do Redux Saga
import * as actions from './actions' //importa tudo de actions
import * as types from '../types' //importado tudo de types
import { toast } from "react-toastify"; //importa o toast, assim podendo usar no arquivo

const requisicao = () => new Promise(resolve => { //define a const requisicao como sendo uma função assincrona que retorna uma Promise, e essa Promise é "resolvida" após um tempo de 600ms usando o setTimeOut
    setTimeout(() => {
        resolve()
    }, 600)
})

function* exampleRequest(){ //Função geradora que representa um saga do Redux Saga, o * significa "generator function"
    //Bloco try-catch usado para lidar com a lógica do saga
    try { //bloco que tenta tudo que está dentro dele
        //yield é palavra-chave JS usada dentro de funções geradoras para pausar a execução até que o que ela chame, seja concluido, e depois passa um "caller", assim continuando a execução
        yield call(requisicao) //call é usado para chamar funções assincronas, no caso "requisicao" aí ele pausa a execução do saga até que a Promise retorne sucesso ou falha, aí se ela for resolvida, continua a execução, agora se for rejeitada (der erro), ela irá para o bloco 'catch'
        yield put(actions.clicaBotaoSuccess()) //O put é usado para despachar ações Redux a partir de sagas, e no caso está despachando a ação 'clicaBotaoSuccess', importada do actions, que indica ação bem sucedida
    }catch{ //bloco que é executado se algum erro acontecer no bloco "try"
        toast.error('Deu erro') //caso desse um erro/reject, enviaria o toast na tela
        yield put(actions.clicaBotaoFailure()) //despachaa a ação de 'clicaBotaoFailure', vinda do actions, usando o put, assim indicando ação falhada
    }
}

export default all([ //exporta um array de sagas usando a função "all" do Redux Saga
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest), //Só um saga é exportado usando o efeito 'takeLatest' que ignora as execuções pendentes e executa somente a ultima, assim somente a execução mais recente é mantida, aí dentro é chamado 'BOTAO_CLICADO_REQUEST' vindo de types, e quando ela é despachada, o saga "exampleRequest" (função geradora) é executado
])