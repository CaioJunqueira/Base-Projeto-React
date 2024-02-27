import axios from 'axios' //importa a biblioteca axios, que é usada para fazer requisições HTTP em JS, no browser ou no Node.js, e facilita em solicitações CRUD

export default axios.create({ //exporta uma instancia do Axios, e a função fornecida pelo Axios axios.create({}) cria uma instancia do cliente Axios, permitindo passar uma série de configurações, como um objeto, e no caso esse objeto passa a configuração que define a baseURL 
    baseURL: 'https://curso1.otaviomiranda.com.br' //define a URL base para todas as requisições feitas com essa instancia do Axios, assim quando fizer uma solicitação da API, e especificar o caminho relativo, como ('/alunos'), o Axios irá concatenar esse caminho a URL base e assim formar a URL completa, no caso ('https://curso1.otaviomiranda.com.br/alunos')
})

//É muito util porque evita a repetição da URL base em todas as solicitações e facilita manutenção se a URL base precisar ser alterada no futuro