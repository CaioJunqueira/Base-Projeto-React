import styled from 'styled-components' //importaçãodo "styled-components" usando "styled" (mas pode ser o nome que quiser)
import { primaryColor } from '../../config/colors' //importando a variavel 'primaryColor' do arquivo de config colors


// Uso de styled-components, faz-se um arquivo .js, com preferencia de nome como styles.js ou styled.js


 /* Deve exportar uma const, no caso a escolha de nome foi Nav(barra de navegação) e define essa const como sendo igual a uma styled(do styled-components) . nav(tag html) e depois usa-se `` e tudo dentro dele será a estilização, fazendo como em um arquivo css  */

export const Nav = styled.nav`

    background: ${primaryColor};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        color: #fff;
        margin: 0 10px 0;
        font-weight: 700;
    }
`