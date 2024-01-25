import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useMemo } from "react";
import NavBar from "./components/NavBar";
import { ColorModeContextProvider } from "./context/ColorModeContext";


function App() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // const navigationBar = useMemo(() => {
    //     return isMobile ? <MobileNavBar/> : <NavBar />;
    // }, [isMobile]);



    return (
        <div className="App">
            
            <ColorModeContextProvider>
                
                <BrowserRouter>
                    <FirstLoadProvider>
                        <>
                            <NavBar />
                            <AnimatedRoutes isMobile={isMobile} />
                        </>
                    </FirstLoadProvider>
                </BrowserRouter>
            </ColorModeContextProvider>
        </div>
    );
}

export default App;
