/* O types.js é comumente usado para definir constantes que representam tipos de ação dentro do Redux 
Essas constantes são usadas para garantir consistencia na definição e despacho de ações no app
*/

export const BOTAO_CLICADO_SUCCESS ='BOTAO_CLICADO_SUCCESS' //exportando a const que representa o sucesso de alguma operação relacionada ao clique de um botão, dispatch de uma requisição assincrona
export const BOTAO_CLICADO_REQUEST ='BOTAO_CLICADO_REQUEST' //Essa representa a solicitação de click no botão, pode ser usada para solicitação de API, etc
export const BOTAO_CLICADO_FAILURE ='BOTAO_CLICADO_FAILURE' //Representa falha na operação relacionada ao click de um botão