import * as Icons from "@mui/icons-material";

interface IAboutPageContent {
    about: string;
    interests: {
        name: string;
        icon: any;
    }[];
}

export const aboutPageContent: IAboutPageContent = {
    about: `
        Muito prazer! Atualmente faço graduação em Engenharia de Software na PUC Minas. Eu sou apaixonado pela tecnologia, sempre buscando novos conhecimentos no Frontend e computação em núvem mas principalmente em tecnologias e teórias para o Backend. Busco sempre o máximo de qualidade em meus projetos, seguindo os melhores padrões, princípios e arquiteturas para o mesmo.
    `,
    interests: [
        {
            name: "Desenvolvimento Backend",
            icon: Icons.Settings
        },
        {
            name: "Desenvolvimento Web",
            icon: Icons.Web
        },
        {
            name: "Cloud",
            icon: Icons.Cloud
        },
        {
            name: "Banco de Dados",
            icon: Icons.StorageRounded
        },
        {
            name: "Desenvolvimento Mobile",
            icon: Icons.PhonelinkSetup
        },
        {
            name: "Princípios SOLID",
            icon: Icons.Description
        }
    ]

}