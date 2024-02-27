import styled from 'styled-components'


//Abaixo, tem se background-color como um trecho de código JS ${} e dentro dele há uma arrow function "props" que recebe um operador ternário definindo uma propriedade, ela sendo que se "isRed" for verdadeiro, a cor do background será red, e se for falso, será blue, mostrando a força do styled-components, de poder definir especificações de estilo no proprio codigo css

export const Title = styled.h1`
    background-color: ${props => (props.isRed ? 'red' : 'blue')}; 
    small{
        font-size: 12px;
        margin-left: 15px;
        color: #999;
    }
`

export const Paragrafo = styled.p`
    font-size: 80px;
`