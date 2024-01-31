import { Box, useTheme } from "@mui/material";
import { motion, useIsPresent } from "framer-motion";
import { useEffect } from "react";
import { useFirstLoad } from "../context/FirstLoadProvider";

interface IAnimatePageChangerProps {
    children: JSX.Element;
}

function AnimatePageChanger(props: IAnimatePageChangerProps) {
    const { children } = props;
    const {alreadyLoaded, toggleAlreadyLoaded} = useFirstLoad();

    const theme = useTheme();
    const isPresent = useIsPresent();

    useEffect(() => {
        toggleAlreadyLoaded();
    }, []);

    return (
        <Box sx={{width: "100%", height: "90vh"}}>
            {children}
            <motion.div
                initial={ children.key === "home" && !alreadyLoaded ? false : {scaleX: 1} }
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ 
                    originX: isPresent ? 0 : 1, 
                    filter: "brightness(0.5)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: theme.palette.primary.light,
                    zIndex: 99
                }}
                className="privacy-screen"
            />
        </Box>
    );
}

export default AnimatePageChanger;