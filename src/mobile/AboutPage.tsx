import { Box, Chip, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { motion, useIsPresent } from "framer-motion";

function AboutPage() {

    const isPresent = useIsPresent();

    const interest = [
        {
            name: "Desenvolvimento Backend",
            icon: null
        },
        {
            name: "Desenvolvimento Web",
            icon: null
        },
        {
            name: "Cloud",
            icon: null
        },
        {
            name: "Banco de Dados",
            icon: null
        },
        {
            name: "Desenvolvimento Mobile",
            icon: null
        },
        {
            name: "Princípios SOLID",
            icon: null
        }
    ]

    return (
        <Container
            sx={{
                height: "100%",
            }}
        >

            <Box sx={{ display: "flex" }}>
                <Typography
                    sx={{
                        fontWeight: "700",
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
                        width: "256px",
                        height: "256px",
                        overflow: "hidden",
                        borderRadius: "50%",
                        position: "relative"
                    }}
                >
                    <img
                        src="/profile.jpg"
                        width="256px"
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
                        Muito prazer! Atualmente faço graduação em Engenharia de Software na PUC Minas. Eu sou apaixonado pela tecnologia, sempre buscando novos conhecimentos no Frontend e computação em núvem mas principalmente em tecnologias e teórias para o Backend. Busco sempre o máximo de qualidade em meus projetos, seguindo os melhores padrões, princípios e arquiteturas para o mesmo.
                    </Typography>

                    <Divider textAlign="left" style={{ marginTop: "1em" }}>
                        <Chip label="Interesses" />
                    </Divider>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(6)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Paper></Paper>
                            </Grid>
                        ))}
                    </Grid>

                </Box>


            </Box>
        </Container>
    );
}

export default AboutPage;