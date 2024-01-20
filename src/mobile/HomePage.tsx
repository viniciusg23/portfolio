import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";
import { GitHub, LinkedIn, TextSnippet } from "@mui/icons-material";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { homePageContent } from "../data/homePageContent";
import { outsideLink } from "../helpers/outsideLink";



function HomePage() {

    const theme = useTheme();

    // const handleSocial = (url: string) => {
    //     window.open(url, "_blank");
    // }

    const handleDownload = () => {
        fetch("curriculum.pdf").then((response) => {
            response.blob().then((blob) => {             
                const fileURL = window.URL.createObjectURL(blob);
                const alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Currículo.pdf";
                alink.click();
            });
        });
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "2em",
                px: "2em"
            }}
        >

            <motion.div
                style={{zIndex: 2, width: "100%"}}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", delay: 0 }}
            >
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "background.default",
                        borderBottom: "2px solid #000",
                        paddingBottom: "1.5em",
                        paddingY: "1.5em"
                    }}
                >
                    <Typography
                        textAlign="left"
                        sx={{ fontSize: "1.5em" }}
                    >
                        Oi 👋 Eu Sou o
                    </Typography>
                    <Typography
                        textAlign="center"
                        sx={{
                            fontSize: "2.5em",
                            fontWeight: "800",
                            lineHeight: 1,
                            my: ".5em"
                        }}
                    >
                        {homePageContent.name}
                    </Typography>
                    <Typography
                        textAlign="right"
                        sx={{
                            fontSize: "1.2em"
                        }}
                    >
                        <Typewriter
                            options={{
                                strings: homePageContent.typewriter,
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </Typography>
                </Box>
            </motion.div>
            

            <Box 
                sx={{
                    width: "100%",
                    zIndex: 1
                }}
            >

                <motion.div
                    style={{zIndex: 1}}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", delay: 1 }}
                >
                    <Typography textAlign="left">
                        {homePageContent.content}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", delay: 0.5 }}
                >
                    <Box sx={{
                        marginBottom: ".5em",
                        display: "flex",
                        justifyContent: "center",
                        mt: "1em"
                    }}>
                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="GitHub"
                                onClick={() => outsideLink(homePageContent.github)}
                            >
                                <GitHub fontSize="large" htmlColor="#000" />
                            </IconButton>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="LinkedIn"
                                onClick={() => outsideLink(homePageContent.linkedin)}
                            >
                                <LinkedIn fontSize="large" htmlColor="#0A66C2" />
                            </IconButton>
                        </motion.div>


                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="Curriculum"
                                onClick={handleDownload}
                            >
                                <TextSnippet fontSize="large" htmlColor="#ED6C02" />
                            </IconButton>
                        </motion.div>

                    </Box>
                </motion.div>
                
            </Box>

        </Container>

    );
}

export default HomePage;