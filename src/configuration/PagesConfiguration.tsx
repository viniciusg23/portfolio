import AboutPage from "../desktop/AboutPage";
import HomePage from "../desktop/HomePage";
import ProjectsPage from "../desktop/ProjectsPage";
import SkillsPage from "../desktop/SkillsPage";

//mobile pages
import MobileHomePage from "../mobile/HomePage";
import MobileAboutPage from "../mobile/AboutPage";
import MobileProjectsPage from "../mobile/ProjectsPage";
import MobileSkillsPage from "../mobile/SkillsPage";


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

];

