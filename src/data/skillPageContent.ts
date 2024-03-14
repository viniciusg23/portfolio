export const categories = {
    "language": "Linguagens",
    "framework": "Frameworks & Bibliotecas",
    "database": "Banco de Dados",
    "tool": "Ferramentas"
};

type CategoryKeys = keyof typeof categories;

interface ISkillPageContent {
    content: string;
    skills: ISkill[]
}

export interface ISkill {
    name: string;
    description: string;
    learnMoreUrl: string;
    category: CategoryKeys;
    iconUrl?: string;
    skillIconId?: string;
}

export const skillPageContent: ISkillPageContent = {
    content: "Aqui tem um pouco de tudo que já utilizei e tive algum contato significante ao longo dos meus anos como desenvolvedor.",
    skills: [
        {
            name: "TypeScript",
            description: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript",
            learnMoreUrl: "https://www.typescriptlang.org/",
            category: "language",
            skillIconId: "ts"
        },
        {
            name: "JavaScript",
            description: "JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos.",
            learnMoreUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            category: "language",
            skillIconId: "javascript"
        },
        {
            name: "Java",
            description: "Java é uma linguagem de programação de alto nível, orientada a objetos e multiplataforma.",
            learnMoreUrl: "https://www.java.com/",
            category: "language",
            skillIconId: "java"
        },
        {
            name: "C",
            description: "C é uma linguagem de programação de propósito geral.",
            learnMoreUrl: "https://en.wikipedia.org/wiki/C_(programming_language)",
            category: "language",
            skillIconId: "c"
        },
        {
            name: "React",
            description: "React é uma biblioteca JavaScript para construir interfaces de usuário.",
            learnMoreUrl: "https://reactjs.org/",
            category: "framework",
            skillIconId: "react"
        },
        {
            name: "Redux",
            description: "Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript.",
            learnMoreUrl: "https://redux.js.org/",
            category: "framework",
            skillIconId: "redux"
        },
        {
            name: "Material UI",
            description: "Material-UI é uma biblioteca popular de componentes React para um desenvolvimento mais rápido e fácil.",
            learnMoreUrl: "https://mui.com/",
            category: "framework",
            skillIconId: "materialui"
        },
        {
            name: "HTML",
            description: "HTML é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web.",
            learnMoreUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            category: "language",
            skillIconId: "html"
        },
        {
            name: "CSS",
            description: "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML.",
            learnMoreUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            category: "language",
            skillIconId: "css"
        },
        {
            name: "Bootstrap",
            description: "Bootstrap é um framework front-end para desenvolvimento de sites e aplicativos web.",
            learnMoreUrl: "https://getbootstrap.com/",
            category: "framework",
            skillIconId: "bootstrap"
        },
        {
            name: "NodeJs",
            description: "Node.js é a ferramenta que vai nos entregar a capacidade de interpretar código JavaScript, de maneira bem similar ao navegador",
            learnMoreUrl: "https://nodejs.org/en/about/",
            category: "framework",
            skillIconId: "nodejs"
        },
        {
            name: "Spring Boot",
            description: "Spring Boot é uma estrutura de código aberto baseada em Java usada para criar aplicativos independentes baseados em Spring de nível de produção com esforço mínimo.",
            learnMoreUrl: "https://spring.io/projects/spring-boot/",
            category: "framework",
            skillIconId: "spring"
        },
        {
            name: "Sequelize",
            description: "Sequelize é um ORM baseado em promessas para Node.js v4 e acima.",
            learnMoreUrl: "https://sequelize.org/",
            category: "framework",
            skillIconId: "sequelize"
        },
        {
            name: "Express",
            description: "Express é um framework de aplicativo da web para Node.js.",
            learnMoreUrl: "https://expressjs.com/",
            category: "framework",
            skillIconId: "express"
        },
        {
            name: "vitest",
            description: "Vitest é uma ferramenta versátil para testes em ambientes com TypeScript e JavaScript",
            learnMoreUrl: "https://skillicons.dev/vitest",
            category: "framework",
            skillIconId: "vitest"
        },
        {
            name: "Linux",
            description: "Linux é um kernel de sistema operacional de código aberto.",
            learnMoreUrl: "https://www.linux.org/",
            category: "tool",
            skillIconId: "linux"
        },
        {
            name: "Bash",
            description: "Bash é uma linguagem de script de shell para sistemas operacionais Unix e Unix-like.",
            learnMoreUrl: "https://www.gnu.org/software/bash/",
            category: "tool",
            skillIconId: "bash"
        },
        {
            name: "AWS",
            description: "Amazon Web Services (AWS) é uma plataforma de serviços em nuvem oferecida pela Amazon.",
            learnMoreUrl: "https://aws.amazon.com/",
            category: "tool",
            skillIconId: "aws"
        },
        {
            name: "Docker",
            description: "Docker é uma plataforma de código aberto para desenvolvimento, envio e execução de aplicativos em contêineres.",
            learnMoreUrl: "https://www.docker.com/",
            category: "tool",
            skillIconId: "docker"
        },

        {
            name: "MySQL",
            description: "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.",
            learnMoreUrl: "https://www.mysql.com/",
            category: "database",
            skillIconId: "mysql"
        },
        {
            name: "MongoDB",
            description: "MongoDB é um banco de dados de documentos de código aberto e orientado a documentos.",
            learnMoreUrl: "https://www.mongodb.com/",
            category: "database",
            skillIconId: "mongodb"
        },
        {
            name: "SQLite",
            description: "SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.",
            learnMoreUrl: "https://www.sqlite.org/index.html",
            category: "database",
            skillIconId: "sqlite"
        },
        {
            name: "Git",
            description: "Git é um sistema de controle de versão distribuído de código aberto.",
            learnMoreUrl: "https://git-scm.com/",
            category: "tool",
            skillIconId: "git"
        },
        {
            name: "Github",
            description: "GitHub é uma plataforma de hospedagem de código-fonte e colaboração baseada em Git.",
            learnMoreUrl: "https://github.com/",
            category: "tool",
            skillIconId: "github"
        },
        {
            name: "Angular",
            description: "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript.",
            learnMoreUrl: "https://angular.io/",
            category: "framework",
            skillIconId: "angular"
        },
        {
            name: "Postman",
            description: "Postman é uma plataforma de colaboração para desenvolvimento de API.",
            learnMoreUrl: "https://www.postman.com/",
            category: "tool",
            skillIconId: "postman"
        },
        {
            name: "Terraform",
            description: "O Terraform é uma ferramenta de software de infraestrutura como código criada pela HashiCorp.",
            learnMoreUrl: "https://www.terraform.io/",
            category: "tool",
            skillIconId: "terraform"
        }
    ]
}