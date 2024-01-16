import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useMemo } from "react";
import WebFont from 'webfontloader';
import NavBar from "./desktop/components/NavBar";
import MobileNavBar from "./mobile/components/NavBar";


function App() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigationBar = useMemo(() => {
        return isMobile ? <MobileNavBar/> : <NavBar />;
    }, [isMobile]);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Jost"],
            },
        });
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <FirstLoadProvider>
                    <>
                        {navigationBar}
                        <AnimatedRoutes isMobile={isMobile}/>
                    </>
                </FirstLoadProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
