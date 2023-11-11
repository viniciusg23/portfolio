import { Box } from "@mui/material";
import { motion, useIsPresent } from "framer-motion";
import { useEffect, useState } from "react";
import { useFirstLoad } from "../context/FirstLoadProvider";

interface IAnimatePageChangerProps {
    children: JSX.Element;
}

function AnimatePageChanger(props: IAnimatePageChangerProps) {
    const { children } = props;
    const {alreadyLoaded, toggleAlreadyLoaded} = useFirstLoad();

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
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </Box>
    );
}

export default AnimatePageChanger;