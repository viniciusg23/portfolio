import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";
import { GitHub, LinkedIn, TextSnippet } from "@mui/icons-material";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { homePageContent } from "../data/homePageContent";

function HomePage() {

    const theme = useTheme();

    const handleSocial = (url: string) => {
        window.open(url, "_blank");
    }

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
            maxWidth="lg"
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "2em"
            }}
        >
            <Box
                sx={{
                    width: "60%",
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                    borderRight: "4px solid #000",
                    paddingRight: "2em",
                    paddingY: "2em"
                }}
            >
                <Typography
                    textAlign="left"
                    sx={{ fontSize: "1.8em" }}
                >
                    Oi 👋 Eu Sou o
                </Typography>
                <Typography
                    sx={{
                        fontSize: "4.2em",
                        fontWeight: "900",
                        textDecoration: "italic"
                    }}
                >
                    {homePageContent.name}
                </Typography>
                <Typography
                    textAlign="right"
                    sx={{
                        fontSize: "1.5em"
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

            <Box
                sx={{
                    width: "40%",
                }}
            >

                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, type: "spring", delay: 1.0 }}
                >
                    <Box sx={{
                        marginBottom: ".5em",
                        display: "flex",
                        flexDirection: "row-reverse"
                    }}>
                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="GitHub"
                                onClick={() => handleSocial(homePageContent.github)}
                            >
                                <GitHub fontSize="large" htmlColor="#000" />
                            </IconButton>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="LinkedIn"
                                onClick={() => handleSocial(homePageContent.linkedin)}
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



                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1, type: "spring", delay: 0.5 }}
                >
                    <Typography textAlign="left">
                        {homePageContent.content}
                    </Typography>
                </motion.div>
            </Box>

        </Container>

    );
}

export default HomePage;