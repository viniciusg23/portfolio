interface IHomePageContent {
    name: string;
    content: string;
    typewriter: string[];
    github: string;
    linkedin: string;
    curriculum?: string;
}

export const homePageContent: IHomePageContent = {
    name: "Vinícius Gonzaga",
    content: "Muito prazer! Atualmente faço graduação em Engenharia de Software na PUC Minas. Eu sou apaixonado pela tecnologia, sempre buscando novos conhecimentos no Frontend e computação em núvem mas principalmente em tecnologias e teórias para o Backend. Busco sempre o máximo de qualidade em meus projetos, seguindo os melhores padrões, princípios e arquiteturas para o mesmo.",
    typewriter: ["Engenheiro de Software", "Desenvolvedor Full-Stack", "Desenvolvedor Mobile", "DevOps"],
    github: "https://github.com/viniciusg23",
    linkedin: "https://www.linkedin.com/in/vin%C3%ADcius-gonzaga-guilherme-9a65a722a/"
}