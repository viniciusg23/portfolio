import { Box, Chip, Container, Divider, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import { motion, useIsPresent } from "framer-motion";
import { aboutPageContent } from "../data/aboutPageContent";

function AboutPage() {

    return (
        <Container
            sx={{
                height: "100%",
            }}
        >

            <Box sx={{ display: "flex", my: "1em" }}>
                <Typography
                    sx={{
                        fontWeight: "800",
                        fontSize: "2em"
                    }}
                >
                    Sobre mim
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        width: "156px",
                        height: "156px",
                        overflow: "hidden",
                        borderRadius: "50%",
                        position: "relative",
                        border: "solid 3px #000000"
                    }}
                >
                    <img
                        src="/profile.jpg"
                        width="156px"
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

                <Box >
                    <Typography textAlign="left" mt="1em">
                        {aboutPageContent.about}
                    </Typography>

                    <Divider textAlign="left" sx={{my: "1em"}}>
                        <Typography sx={{ fontWeight: 600, fontSize: "1.2em" }} >
                            Interesses
                        </Typography>
                    </Divider>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 9 }}>
                        {aboutPageContent.interests.map((interest, index) => (
                            <Grid item xs={1} sm={2} md={3} key={index}>
                                <Paper>
                                    <interest.icon />
                                    <Typography>{interest.name}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                </Box>


            </Box>
        </Container>
    );
}

export default AboutPage;