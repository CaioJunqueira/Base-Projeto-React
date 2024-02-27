import { Nav } from "./styled" //importação da const "Nav" estilizada usando o 'styled-components'
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa' //importação dos icons vindos de "react-icons"
import { Link } from "react-router-dom" //importa o componente "Link" do pacote 'react-router-dom', o qual é usado para criar links dentro de apps React que estão usando o React Router, permitindo navegação declarativa, vinculando URLs e navegando sem recarregar a pagina
import { useSelector } from "react-redux" //importa o hook useSelector do Redux, que é usado para selecionar partes do estado global da aplicação e utilizá-los no componente

export default function Header(){
    const botaoClicado = useSelector(state => state.example.botaoClicado) //define a const botaoClicado como o hook useSelector do Redux para selecionar o estado 'botaoClicado' do modulo example na store Redux, usando uma função callback que recebe o estado como argumento e retorna a parte que se quer acessar, no caso o valor do botaoClicado do modulo example, assim o valor do 'botaoClicado' será atualizado sempre que o estado global da aplicação mudar

    return(
        <Nav> {/* O conteúdo envolto na tag estilizada Nav (.nav) vindo da "styled.js" */}
            <Link to="/">
                {/* Usando o componente Link como tag, e usando o atributo "to" para navegar para a pagina especifica
                mas sem recarregar a página inteira */}
                <FaHome size={24}/>
                {/* Coloca o componente icon e define atributo size a ele, o mesmo com 24 de tamanho */}
            </Link>
            <Link to="/login">
                {/* O componente Link envolve todos os icons, mas poderia ser com textos, conteudos, etc, e assim definindo rotas para cada um */}
                <FaUserAlt size={24}/>
            </Link>
            <Link to="/testee">
                <FaSignInAlt size={24}/>
            </Link>
            {botaoClicado ? 'Clicado' : 'Não clicado'}
            {/* ternario que se botaoClicado for true, retorna o texto 'Clicado' e se for false, 'Nao clicado' */}
        </Nav>
    )
}