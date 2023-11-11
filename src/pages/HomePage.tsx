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
                    sx={{fontSize: "1.8em"}}
                >
                    Oi 👋 Eu Sou o
                </Typography>
                <Typography
                    sx={{
                        fontSize: "4.2em",
                        fontWeight: "800"
                    }}
                >
                    Vinícius Gonzaga
                </Typography>
                <Typography 
                    textAlign="right"
                    sx={{
                        fontSize: "1.5em"
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
                        <motion.div whileHover={{scale: 1.2, y: -10}}>
                            <IconButton 
                                aria-label="GitHub" 
                                onClick={() => handleSocial("https://github.com/viniciusg23")}
                            >
                                <GitHub fontSize="large" htmlColor="#000" />
                            </IconButton>
                        </motion.div>
                        
                        <motion.div whileHover={{scale: 1.2, y: -10}}>
                            <IconButton 
                                aria-label="LinkedIn" 
                                onClick={() => handleSocial("https://www.linkedin.com/in/vin%C3%ADcius-gonzaga-guilherme-9a65a722a/")}
                            >
                                <LinkedIn fontSize="large" htmlColor="#0A66C2"/>
                            </IconButton>
                        </motion.div>


                        <motion.div whileHover={{scale: 1.2, y: -10}}>
                            <IconButton 
                                aria-label="Curriculum" 
                                onClick={() => handleSocial("")}
                            >
                                <TextSnippet fontSize="large" htmlColor="#ED6C02"/>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur corrupti praesentium, distinctio velit placeat adipisci magnam aut maxime perferendis repellendus fugiat fuga omnis esse animi minima iste facere fugit?
                    </Typography>
                </motion.div>
                
                
            </Box>
        </Container>
    );
}

export default HomePage;