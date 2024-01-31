interface IProjectsPageContent {
    subTitle: string;
    projects: IProjectContent[]
}

export interface IProjectContent {
    projectName: string;
    url?: string;
    username: string;
    repositoryName: string;
    gitHubRepository: string;
    stack: {
        name: string;
        skillIconName: string;
    }[],
    description: string;
}

export const projectsPageContent: IProjectsPageContent = {
    subTitle: "Nesta seção, você encontrará uma seleção dos meus projetos, refletindo tanto meu compromisso com meu aprendizado quanto minha capacidade de colaborar efetivamente em uma equipe. Aqui, você poderá explorar uma variedade de trabalhos, desde projetos pessoais onde explorei novas tecnologias e conceitos até colaborações em ambientes profissionais. Cada projeto representa um desafio único que enfrentei e uma oportunidade para crescer e evoluir.",
    projects: [
        {
            projectName: "IStock - Gerenciador de Estoque",
            username: "viniciusg23",
            repositoryName: "stock-manager",
            gitHubRepository: "https://github.com/viniciusg23/stock-manager",
            stack: [
                {name: "Typescript", skillIconName: "ts"},
                {name: "NodeJs", skillIconName: "nodejs"},
                {name: "Express", skillIconName: "express"},
                {name: "Mongo DB", skillIconName: "mongodb"},
                {name: "React", skillIconName: "react"},
                {name: "Redux", skillIconName: "redux"},
                {name: "Material UI", skillIconName: "materialui"},
                {name: "Git", skillIconName: "git"}
            ],
            description: "IStock é uma ferramenta fácil de utilizar para gerenciamento de estoque."
        },
        {
            projectName: "Shopping Cart",
            url: "https://viniciusg23.github.io/shopping-cart-with-redux/",
            username: "viniciusg23",
            repositoryName: "shopping-cart-with-redux",
            gitHubRepository: "https://github.com/viniciusg23/shopping-cart-with-redux",
            stack: [
                {name: "Typescript", skillIconName: "ts"},
                {name: "React", skillIconName: "react"},
                {name: "Redux", skillIconName: "redux"},
                {name: "CSS3", skillIconName: "css"}
            ],
            description: "Este projeto foi criado com o intuito de eu estudar a ferramenta Redux no contexto do React, juntamente com o TypeScript. Para isso, desenvolvi um pequeno aplicativo que é alimentado pela API do Mercado Livre. Nele, é possível pesquisar por diversos produtos reais e adicioná-los ou removê-los do seu carrinho de compras."
        },
        {
            projectName: "To-do List",
            url: "https://viniciusg23.github.io/To-do_List/src/",
            username: "viniciusg23",
            repositoryName: "To-do_List",
            gitHubRepository: "https://github.com/viniciusg23/To-do_List",
            stack: [
                {name: "JavaScript", skillIconName: "javascript"},
                {name: "HTML5", skillIconName: "html"},
                {name: "CSS3", skillIconName: "css"}
            ],
            description: "Este projeto se trata de uma lista de tarefas com dados persistentes, onde você poderá adicionar, editar, excluir e marcar como feito seus afazeres sem perder seus dados ao fechar o navegador."
        },
        {
            projectName: "Sistema Para Controle de Funcionários",
            username: "viniciusg23",
            repositoryName: "crud-nodejs",
            gitHubRepository: "https://github.com/viniciusg23/crud-nodejs",
            stack: [
                {name: "JavaScript", skillIconName: "javascript"},
                {name: "NodeJs", skillIconName: "nodejs"},
                {name: "Bootstrap", skillIconName: "bootstrap"},
                {name: "HTML5", skillIconName: "html"},
                {name: "CSS3", skillIconName: "css"}
            ],
            description: "Sistema de CRUD para o gerenciamento dos funcionários de uma empresa. Como um CRUD, esta aplicação possui as funcionalidades de criação, leitura, atualização e remoção de funcionários e cargos."
        }
    ]
}