import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { ColorModeContextProvider } from "./context/ColorModeContext";
import { useIsMobile } from "./helpers/IsMobile";


function App() {

    const isMobile = useIsMobile();
    const theme = useTheme();

    useEffect(() => {
        const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
        if (themeColorMetaTag) {
            themeColorMetaTag.setAttribute('content', theme.palette.background.default);
        }
    }, []);

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
