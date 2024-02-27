import React from 'react'
import { Container } from '../../styles/GlobalStyles' // Importa Container do GlobalStyles, estilizando tudo
import {Title, Paragrafo} from './styled' //importa as 2 consts do arquivo estilizado
import axios from '../../services/axios' //importa o axios, mas não da biblioteca, e sim do "axios.js"
import { useDispatch } from 'react-redux' //importa o hook useDispatch do redux, usado para despachar açoes Redux
import * as exampleActions from '../../store/modules/example/actions.js' //importa tudo de actions.js


export default function Login(){
    React.useEffect(() => { //Usa o hook "useEffect" do React, que é utilizado para realizar efeitos colaterais em componentes funcionais, e ele aceita uma função callback que será executada a cada renderização do componente
        async function getData(){ //função assincrona
            const response = await axios.get('/alunos') //define a const response como uma solicitação get (vindo de '/alunos'), usando o axios, que faz concatenar '/alunos' a URL base, e usa o await que espera a conclusão dessa solicitação antes de prosseguir com o resto da função.
            console.log(response) //quando a solicitação é concluida, vem o log de response, que recebeu tudo isso
        }

        getData() //retorno da função
    }, [])

    const dispatch = useDispatch() //define a cosnt dispatch como a função hook 'useDispatch' do Redux, que despacha ações do Redux dentro de componentes funcionais

    function handleClick(e){ //função handleClick que recebe um evento (e) para grenciar o click no button
        e.preventDefault() //previne a ação padrao 

        dispatch(exampleActions.clicaBotaoRequest()) //Usa dispatch (const que recebeu a função) para despachar uma ação Redux, no caso a ação despachada é a clicaBotaoRequest, vinda da actions.js, que faz o request ao clicar no botão
    }

    return(
        <Container>
            {/* Envolve tudo no componente Container, que vem estilizado do GlobalStyles, e sendo uma tag .section */}
            <Title isRed={false}>Login <small>Oie</small> </Title>
            {/* atributo isRed definido como false, então lá no styled dele, o background-color será blue */}
            <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
            <button type="button" onClick={handleClick} >Enviar</button>
            {/* define a propriedade "onClick" do button como sendo a função handleClick, para gerenciar o que acontecer ao clicar */}
        </Container>

    ) 
}