export interface IProjectsPageContent {
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

export const projectsPageContent: IProjectsPageContent[] = [
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
        url: "#",
        username: "viniciusg23",
        repositoryName: "",
        gitHubRepository: "https://github.com/viniciusg23/shopping-cart-with-redux",
        stack: [
            {name: "Typescript", skillIconName: "ts"},
            {name: "React", skillIconName: "react"},
            {name: "Redux", skillIconName: "redux"},
        ],
        description: "Este projeto foi criado com o intuito de eu estudar a ferramenta Redux no contexto do React, juntamente com o TypeScript. Para isso, desenvolvi um pequeno aplicativo que é alimentado pela API do Mercado Livre. Nele, é possível pesquisar por diversos produtos reais e adicioná-los ou removê-los do seu carrinho de compras."
    }
]