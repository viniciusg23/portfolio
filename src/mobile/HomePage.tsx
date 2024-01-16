import { Box, Container, IconButton, Typography, useTheme } from "@mui/material";
import { GitHub, LinkedIn, TextSnippet } from "@mui/icons-material";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"


function HomePage() {

    const theme = useTheme();

    const handleSocial = (url: string) => {
        window.open(url, "_blank");
    }

    return (
        <Container
            sx={{
                height: "100%",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "2em"
            }}
        >

            <motion.div
                style={{zIndex: 2}}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", delay: 0 }}
            >
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--background'),
                        // backgroundColor: "red",
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
                            fontWeight: "800"
                        }}
                    >
                        Vinícius Gonzaga
                    </Typography>
                    <Typography
                        textAlign="right"
                        sx={{
                            fontSize: "1.2em"
                        }}
                    >
                        <Typewriter
                            options={{
                                strings: ["Engenheiro de Software", "Desenvolvedor Back-end"],
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur corrupti praesentium, distinctio velit placeat adipisci magnam aut maxime perferendis repellendus fugiat fuga omnis esse animi minima iste facere fugit?
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
                        justifyContent: "center"
                    }}>
                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="GitHub"
                                onClick={() => handleSocial("https://github.com/viniciusg23")}
                            >
                                <GitHub fontSize="large" htmlColor="#000" />
                            </IconButton>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="LinkedIn"
                                onClick={() => handleSocial("https://www.linkedin.com/in/vin%C3%ADcius-gonzaga-guilherme-9a65a722a/")}
                            >
                                <LinkedIn fontSize="large" htmlColor="#0A66C2" />
                            </IconButton>
                        </motion.div>


                        <motion.div whileHover={{ scale: 1.2, y: -10 }}>
                            <IconButton
                                aria-label="Curriculum"
                                onClick={() => handleSocial("")}
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