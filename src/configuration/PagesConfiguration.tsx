import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import EducationPage from "../pages/EducationPage";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";

export interface IPageOption {
    name: string;
    path: string;
    element: JSX.Element;
}

export const pages: IPageOption[] = [
    { name: "Home", path: "", element: <HomePage key="home" />},
    { name: "About", path: "about", element: <AboutPage /> },
    { name: "Education", path: "education", element: <EducationPage /> },
    { name: "Experience", path: "experience", element: <EducationPage />},
    { name: "Projects", path: "projects", element: <ProjectsPage /> },
    { name: "Skills", path: "skills", element: <SkillsPage /> },
    { name: "Contact", path: "contact", element: <ContactPage /> }
];

