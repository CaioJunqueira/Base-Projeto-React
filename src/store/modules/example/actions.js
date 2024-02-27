//O arquivo actions, contém os action creators, que são funções responsáveis por criar e retornar objetos de ação. Esses objetos de ação são então despachados para a store Redux, onde são processados pelos reducers para atualizar o estado da aplicação.


import * as types from '../types' //importa tudo do types, como "types" no caso as 3 consts de ação de botão

export function clicaBotaoRequest(){ //exporta a função que irá fazer o request ao clicar no botão
    return{
        type: types.BOTAO_CLICADO_REQUEST, //A propriedade "type" do Redux, identifica o tipo da ação que esta sendo despachada. É uma string que descreve a natureza da ação, ou seja, o que está acontecendo na aplicação, e no exemplo está sendo definida usando a constante 'BOTAO_CLICADO_REQUEST'
    }
}

export function clicaBotaoSuccess(){
    return{
        type: types.BOTAO_CLICADO_SUCCESS, //Como as outras, define o type como sendo a const importada
    }
}

export function clicaBotaoFailure(){
    return{
        type: types.BOTAO_CLICADO_FAILURE,
    }
}

//O que ele faz

// Define Action Creators: O arquivo de actions define action creators, que são funções que criam e retornam objetos de ação. Cada action creator geralmente está associado a uma ação específica que pode ser despachada na aplicação.

// Encapsula a Lógica de Criação de Ação: As action creators encapsulam a lógica de criação de ação em um único local. Isso significa que a lógica para criar uma determinada ação é centralizada em um único arquivo, facilitando a manutenção e a compreensão do código.

// Padrão de Nomenclatura Consistente: Ao definir action creators em um arquivo separado, é possível seguir um padrão de nomenclatura consistente para os tipos de ação e os nomes dos action creators. Isso ajuda a garantir que os nomes das ações sejam consistentes em toda a aplicação.

// Separação de Preocupações: Separar a lógica de criação de ação da lógica de negócios e dos componentes da interface do usuário ajuda a manter um código mais organizado e fácil de entender. Isso facilita a manutenção e a escalabilidade do aplicativo.

// Promove a Reutilização de Código: Ao definir action creators separadamente, é possível reutilizá-los em diferentes partes da aplicação. Isso é especialmente útil quando várias partes da aplicação precisam despachar a mesma ação.