import { Avatar, Box, Chip, Container, Divider, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import TypewriterText from "../components/TypewriterText";
import { GitHub, Visibility } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projectsPageContent } from "../data/projectsPageContent";


function ProjectsPage() {

    const theme = useTheme();
    const navigate = useNavigate();


    return (
        <Container
            maxWidth="lg"
            sx={{
                height: "100%",
            }}
        >
            <Title title="Projetos" />

            <TypewriterText text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur corrupti praesentium, distinctio velit placeat adipisci magnam aut maxime perferendis repellendus fugiat fuga omnis esse animi minima iste facere fugit?"} />

            <Box
                sx={{
                    mt: "1em",

                }}
            >

                <Grid container columnSpacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>

                    {projectsPageContent.map((project, index) => (

                        <Grid item xs={12} sm={12} md={6} key={index}>
                            <ProjectCard 
                                name={project.name}
                                url={project.url}
                                gitHubRepository={project.gitHubRepository}
                                stack={project.stack}
                                description={project.description}
                            />
                        </Grid>
                    ))}

                </Grid>


            </Box>

        </Container>
    );
}

export default ProjectsPage;