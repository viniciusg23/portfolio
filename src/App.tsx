import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadContext";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { ColorModeContextProvider } from "./context/ColorModeContext";


function App() {

    useEffect(() => {
        const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
        if (themeColorMetaTag) {
            themeColorMetaTag.setAttribute('content', "#fffeff");
        }
    }, []);

    return (
        <div className="App">

            <ColorModeContextProvider>

                <BrowserRouter>
                    <FirstLoadProvider>
                        <>
                            <NavBar />
                            <AnimatedRoutes />
                        </>
                    </FirstLoadProvider>
                </BrowserRouter>
            </ColorModeContextProvider>
        </div>
    );
}

export default App;
