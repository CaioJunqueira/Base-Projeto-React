import Routes from './routes' //importa o componente Routes do 'index.jsx' da pasta routes
import GlobalStyles from './styles/GlobalStyles' //importa os estilos globais direto de styles
import Header from './components/Header' //importa o componente Header
import { Router } from 'react-router-dom/cjs/react-router-dom.min' //Importa o componente Router do React, permitindo a personalização do roteamento da aplicação
import history from './services/history' //importando history, mas não da bilioteca, e sim o "history.js"
import { ToastContainer } from 'react-toastify' //Importa o componente ToastContainer da biblioteca 'react-toastify', e ela é uma biblioteca popular usada para exibir notificações estilo Toast em apps React
import { Provider } from 'react-redux' //importa o componente Provider do Redux, que fornece a store Redux para componentes do app
import store, { persistor } from './store' //importa store Redux e o persistor do index da pasta store
import { PersistGate } from 'redux-persist/integration/react' //importa o componente persisGate do Redux, que é responsavel por aguardar a reidratação completa do estado persistido antes de renderizar o app

function App() {
  return (
    <Provider store={store}>
      {/* Renderiza o componente Provider e passa a store Redux como propriedade "store", assim permitindo que todos os componentes dentro do Provider tenham acesso a store Redux */}
      <PersistGate persistor={persistor} >
        {/* Renderiza o componente PersistGate que passa persistor como propriedade "persistor" e ele aguardará a reidratação completo do estado persistido antes de renderizar os componentes filhos */}
        <Router history={history}>
          {/* O componente Router envolve toda a aplicação, configurando o roteamento e usa-se history como propriedade para o Router fornecer o histórico de navegação personalizado */}
          <Header/>  {/* Componente Header */}
          <Routes/>  {/* Componente Routes vindo da pasta routes */}
          <GlobalStyles/>  {/* Componente com os estilos globais */}
          <ToastContainer autoClose={3000} className="toast-container" />
          {/* o componente toastify é chamado e nele definido propriedade de autoClose de 3s e definido uma classe para ele */}
        </Router>
      </PersistGate>
    </Provider>


  )
}

export default App
