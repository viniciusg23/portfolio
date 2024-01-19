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
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur corrupti praesentium, distinctio velit placeat adipisci magnam aut maxime perferendis repellendus fugiat fuga omnis esse animi minima iste facere fugit?",
    typewriter: ["Engenheiro de Software", "Desenvolvedor Back-end"],
    github: "https://github.com/viniciusg23",
    linkedin: "https://www.linkedin.com/in/vin%C3%ADcius-gonzaga-guilherme-9a65a722a/"
}