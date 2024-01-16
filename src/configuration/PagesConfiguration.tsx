import AboutPage from "../desktop/AboutPage";
import ContactPage from "../desktop/ContactPage";
import EducationPage from "../desktop/EducationPage";
import HomePage from "../desktop/HomePage";
import ProjectsPage from "../desktop/ProjectsPage";
import SkillsPage from "../desktop/SkillsPage";

//mobile pages
import MobileHomePage from "../mobile/HomePage";
import MobileAboutPage from "../mobile/AboutPage";
import MobileEducationPage from "../mobile/EducationPage";
import MobileExperiencePage from "../mobile/ExperiencePage";
import MobileProjectsPage from "../mobile/ProjectsPage";
import MobileSkillsPage from "../mobile/SkillsPage";
import MobileContactPage from "../mobile/ContactPage";


export interface IPageOption {
    name: string;
    path: string;
    element: JSX.Element;
    mobileElement: JSX.Element;
}

export const pages: IPageOption[] = [
    {
        name: "Home",
        path: "",
        element: < HomePage key="home" />,
        mobileElement: < MobileHomePage key="home" />
    },
    {
        name: "Sobre",
        path: "about",
        element: < AboutPage />,
        mobileElement: < MobileAboutPage />
    },
    // {
    //     name: "Education",
    //     path: "education",
    //     element: < EducationPage />,
    //     mobileElement: < MobileEducationPage />
    // },
    // {
    //     name: "Experience",
    //     path: "experience",
    //     element: < EducationPage />,
    //     mobileElement: < MobileExperiencePage />
    // },
    {
        name: "Projetos",
        path: "projects",
        element: < ProjectsPage />,
        mobileElement: < MobileProjectsPage />
    },
    {
        name: "Habilidades",
        path: "skills",
        element: < SkillsPage />,
        mobileElement: < MobileSkillsPage />
    },
    {
        name: "Contato",
        path: "contact",
        element: < ContactPage />,
        mobileElement: < MobileContactPage />
    }
];

