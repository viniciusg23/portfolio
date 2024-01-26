import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useMemo } from "react";
import NavBar from "./components/NavBar";
import { ColorModeContextProvider } from "./context/ColorModeContext";
import { useIsMobile } from "./helpers/IsMobile";


function App() {

    const isMobile = useIsMobile();

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
