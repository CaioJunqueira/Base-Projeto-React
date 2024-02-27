import {Route, Redirect} from 'react-router-dom' //importa Route (usado para definir rotas) e Redirect(usado para redirecionar o usuário para outra rota) direto do pacote 'react-router-dom'
import { PropTypes } from 'prop-types' //importa Proptypes direto de 'prop-types' que é uma biblioteca para validação de tipos de props em componentes React

export default function MyRoute({ component: Component, isClosed, ...rest }){ //A função exportada MyRoute, recebe um objeto props, onde é feita a desestruturação das props. Em 'component: Component' é renomeado a prop 'component' para 'Component', começando com letra maiuscula pois é um componente React, depois chama a prop isClosed, e por ultimo ...rest que captura todas as outras props em um objeto chamado rest

    const isLoggedIn = false //Simulação de um estado de autenticação, assim falso como se não estivesse logado

    if(isClosed && !isLoggedIn){ //Se 'isClosed' for true (rota fechada) e 'isLoggedIn' false (usuário não logado), faz o que está no if
        return( //retorna esse componente de redirecionamento
            <Redirect to={{pathname: '/login', state: {prevPath: rest.location.pathname}}} />
            //chama o componente do router, que redireciona o usuário (usando to={}) para '/login', usando pathname(nome do caminho), e também passa o objeto de estado {prevPath: rest.location.pathname} com state, que captura o pathname da localização atual para que possa ser utilizado posteriormente para redirecionar o usuário de volta após o login
        )
    }
    //Se o if for atendido, retorna tudo acima, mas se não for o caso irá retornar o conteúdo abaixo

    return <Route {...rest} component={Component} />
    //Retorna o componente Route (usado para definir rotas) passando todas as props recebidas com o ...rest e definindo o componente a ser renderizado como 'Component' que foi anteriormente passado nas props
}

MyRoute.defaultProps = { //definindo propriedade padrão do MyRoute
    isClosed: false, //A define como false, caso não seja fornecida ao utilizar o componente MyRoute
}

MyRoute.propTypes = { //define propType para o MyRoute
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired, //Está requerindo 'component' com (isRequired), que indica a prop como obrigatória, sendo fornecida sempre que MyRoute for utilizado, e dizendo com o método "oneOfType" de PropTypes que 'component' deve ser de um tipo ou de outro, no caso 'PropTypes.element' = elemento React válido, ou 'PropTypes.func' = função, (assim component deve ser um componente funcional ou uma classe de componente)
    isClosed: PropTypes.bool, //definindo a prop dela como um boolean
}

//DefaultProps é uma propriedade que permite definir valores padrão para as props de um componente. Isso significa que, se uma propriedade não for fornecida ao componente quando ele for renderizado, o valor padrão será usado em seu lugar.

//PropTypes é uma biblioteca que permite validar o tipo das props passadas para um componente. Isso ajuda a detectar erros de tipo e a garantir que os componentes sejam utilizados corretamente.