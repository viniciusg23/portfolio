import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { AnimatePresence } from "framer-motion";
import AnimatePageChanger from "../helpers/AnimatePageChanger";
import { pages } from "../configuration/PagesConfiguration";

function AnimatedRoutes() {

    const location = useLocation()

    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                {pages.map((page) => (
                    <Route path={`/${page.path}`} element={ <AnimatePageChanger children={page.element} /> }/>
                ))}                
            </Routes>
        </AnimatePresence>
       
    );
}

export default AnimatedRoutes;