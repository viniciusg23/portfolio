import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./helpers/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";
import { ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useMemo } from "react";
import NavBar from "./desktop/components/NavBar";
import MobileNavBar from "./mobile/components/NavBar";


function App() {

    const theme = createTheme({
        typography: {
          fontFamily: "Jost, sans-serif",
        },
    });
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const navigationBar = useMemo(() => {
        return isMobile ? <MobileNavBar/> : <NavBar />;
    }, [isMobile]);



    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <FirstLoadProvider>
                        <>
                            {navigationBar}
                            <AnimatedRoutes isMobile={isMobile}/>
                        </>
                    </FirstLoadProvider>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
