import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { ColorModeContextProvider } from "./context/ColorModeContext";


function App() {

    const theme = useTheme();

    useEffect(() => {
        const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
        // const bgColor = theme.palette.background.default;

        if (themeColorMetaTag) {
            themeColorMetaTag.setAttribute('content', "#fffeff");
        }
    }, [theme]);

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
