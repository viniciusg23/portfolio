import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatePageChanger from "./AnimatePageChanger";
import { pages } from "../configuration/PagesConfiguration";
import { useMediaQuery, useTheme } from "@mui/material";


function AnimatedRoutes() {

    const location = useLocation()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    
    return (
        <AnimatePresence mode="wait" >
            <Routes location={location} key={location.pathname}>
                {pages.map((page) => (
                    <Route
                        key={page.name}
                        path={`/${page.path}`} 
                        element={ 
                            <AnimatePageChanger children={isMobile ? page.mobileElement : page.element} /> 
                        }
                    />
                ))}                
            </Routes>
        </AnimatePresence>
       
    );
}

export default AnimatedRoutes;