import { Box, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { aboutPageContent } from "../data/aboutPageContent"
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import TypewriterText from "../components/TypewriterText";


function AboutPage() {

    const theme = useTheme();
    let interestDelay = 0.1;

    const initialAnimation = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: "100%",
            }}
        >

            <Title title="Sobre Min"/>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    backgroundColor: theme.palette.background.default,
                    zIndex: 2
                }}
            >
                <Box
                    sx={{
                        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                        width: "212px",
                        padding: "0.75em",
                        borderRadius: "50%"
                    }}
                >
                    <Box
                        sx={{
                            width: "212px",
                            height: "212px",
                            overflow: "hidden",
                            borderRadius: "50%",
                            position: "relative",
                            background: "#000"

                        }}
                    >
                        <img
                            src="/profile.jpg"
                            width="212px"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "50%",
                                position: "absolute",
                                top: 0,
                                left: 0
                            }}
                        />
                    </Box>
                </Box>


                <Box mt="1em">
                    <TypewriterText text={aboutPageContent.about}/>
                    <SubTitle title="Interesses"/>
                </Box>
                
            </Box>

            <Box mt="1em" px=".1em">
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 9 }}>
                    {aboutPageContent.interests.map((interest, index) => {

                        interestDelay += 0.3

                        return (
                            <Grid item xs={1} sm={2} md={3} key={index}>
                                <motion.div
                                    initial={initialAnimation ? {x: -600} : {y: -300}}
                                    animate={{ x: 0, y: 0 }}
                                    transition={{ duration: 1, type: "spring", delay: interestDelay }}
                                >
                                    <motion.div whileHover={{ scale: 1.075, y: -10 }}>
                                        <Paper
                                            sx={{
                                                display: "flex",
                                                gap: "1em",
                                                padding: "1em",
                                                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`

                                            }}
                                        >
                                            <interest.icon htmlColor={theme.palette.background.default} />
                                            <Typography color={theme.palette.background.default}>
                                                {interest.name}
                                            </Typography>
                                        </Paper>
                                    </motion.div>

                                </motion.div>
                            </Grid>
                        )
                    })}

                </Grid>
            </Box>

        </Container>
    );
}

export default AboutPage;