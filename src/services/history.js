//Objeto history que faz parte da biblioteca 'history' e é usada no React para quando usa-se roteamento para controlar navegação do usuário


import { createBrowserHistory } from "history"; //importação da função "createBrowserHistory", vinda da biblioteca 'history' que cria um objeto 'history' configurado para trabalhar com a API de histórico do navegador

//quando chama o 'createBrowserHistory()' cria uma instancia history que mantem o historico do navegador, permitindo navegar para frente, para trás, ou para uma localização específica e manipular o histórico sem recarregar a página

const history = createBrowserHistory()

export default history

// Aqui estão algumas das funcionalidades comuns do objeto history:

// push(path, [state]): Adiciona uma nova entrada no histórico do navegador, levando a página para o URL especificado. O parâmetro opcional state pode ser usado para passar dados de estado para a próxima página.

// replace(path, [state]): Substitui a entrada mais recente no histórico do navegador pelo URL especificado. Isso é útil quando você não deseja que a página atual fique no histórico de navegação.

// go(n): Navega para uma entrada específica no histórico do navegador, onde n é o número de entradas para frente (positivo) ou para trás (negativo) que você deseja navegar.

// goBack(): Navega para a página anterior no histórico do navegador, o equivalente a go(-1).

// goForward(): Navega para a próxima página no histórico do navegador, o equivalente a go(1).

// listen(listener): Permite registrar um ouvinte para notificações de alterações no histórico do navegador. Isso é útil para atualizar a interface do usuário em resposta a alterações de rota.

// O objeto history criado usando createBrowserHistory() é comumente utilizado em conjunto com o React Router para controlar a navegação em aplicações React que utilizam roteamento baseado em componentes. Ele fornece uma abstração sobre a API de histórico do navegador, tornando mais fácil gerenciar a navegação programaticamente dentro do aplicativo.