import * as Icons from "@mui/icons-material";

interface IAboutPageContent {
    about: string;
    interests: {
        name: string;
        icon: any;
    }[];
}

export const aboutPageContent: IAboutPageContent = {
    about: "Sou uma pessoa curiosa para aprender novas ferramentas que me possibilitam criar soluções cada vez mais complexas e avançadas. Em meu tempo livre, gosto de estudar um pouco de música e tocar violão 🎶. Também sou fã de videogames 🎮. Além disso, meu esporte favorito é futebol americano 🏈.",
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