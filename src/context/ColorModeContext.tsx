import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";


interface IColorModeContext {
    toggleColorMode: () => void;
    mode: "dark" | "light";
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => {},
    mode: "light"
});

export function ColorModeContextProvider({children} : any){
    
    let lcTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if(!lcTheme){
        localStorage.setItem("theme", "light");
        lcTheme = "light";
    }

    const [mode, setMode] = useState<"light" | "dark">(lcTheme!);
    const colorMode = useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
                localStorage.setItem("theme", mode === "light" ? "dark" : "light");
            },
            mode,
        }),
        [mode]
    );

    const theme = useMemo(() => {
        if(mode === "light"){
            return createTheme({
                typography: {
                    fontFamily: "Jost, sans-serif",
                },
                palette: {
                    mode: "light",
                    primary: {
                        main: "#222",
                        contrastText: "#fff"
                    },
                    background: {
                        default: "#fff",
                        paper: "#F7F7F7",
                    }
                    
                },
            })
        }
        else{
            return createTheme({
                typography: {
                    fontFamily: "Jost, sans-serif",
                },
                palette: {
                    mode: "dark",
                    primary: {
                        main: "#fff",
                        contrastText: "#000"
                    },
                    background: {
                        default: "#13131A",
                        paper: "#17171F"
                    }
                },
            })
        }
    },  
    [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )

}

export function useColorMode(){
    useContext(ColorModeContext);
}