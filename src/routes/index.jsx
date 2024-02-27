import {Switch} from 'react-router-dom' //importa o componente Switch do pacote 'react-router-dom', e ele é usado para renderizar apenas a primeira rota que corresponder ao caminho atual, sendo util quando tem várias rotas e se quer garantir que apenas uma delas seja renderizada por vez
import Login from '../pages/Login' //importa o  componente Login
import Page404 from '../pages/Page404' //importando o componente (página) Page404
import MyRoute from './MyRoute' //importa o componente MyRoute 
import { toast } from 'react-toastify' //importa a função toast do pacote 'react-toastify' que permite que se use a funcionalidade de notificações estilo toast no app

export default function Routes(){
    toast.success('Oie, sucesso') //Mensagem toast de sucesso (vem com layout padrão)
    toast.error('Oie, erro') //Mensagem toast de erro (vem com layout padrão)

    return(
            <Switch> {/* Componente Switch do router envolvendo o código e dentro dela havendo duas rotas definidas pelo MyRoute */}
                <MyRoute exact path='/' component={Login} />
                {/* Componente MyRoute para definir uma rota, primeiro usado a prop "exact" que garante que a rota só seja considerada correspondente se for a URL exata ao caminho, aí a prop "path" especifica o caminho da rota, e 'component={Login}' define o componente que será renderizado ao acessar a rota  */}
                <MyRoute path='*' component={Page404} />
                {/* path='*' server como coringa, que corresponderá a qualquer URL que não seja alguma rota definida anteriormente, assim garantindo que seja usada a Página de erro 404 para qualquer rota não correspondida */}

                {/* O uso do MyRoute ao invés de somente um Route, faz com que essas rotas possam ter lógica adicional definida, no caso acima, a lógica feita dentro do arquivo MyRoute (verificação de autenticação) */}
            </Switch>
    )
}