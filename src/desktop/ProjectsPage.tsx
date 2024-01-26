import { Box, Container, Grid } from "@mui/material";
import Title from "../components/Title";
import TypewriterText from "../components/TypewriterText";
import ProjectCard from "../components/ProjectCard";
import { projectsPageContent } from "../data/projectsPageContent";
import { useState } from "react";
import ProjectDetails from "../components/ProjectDetails";


function ProjectsPage() {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedProjectPath, setSelectedProjectPath] = useState<string>("");
    const [selectedGitHubRepository, setSelectedGitHubRepository] = useState<string>("");


    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);


    return (
        <Container
            maxWidth="lg"
            sx={{
                height: "100%",
            }}
        >
            <Title title="Projetos" />
            <TypewriterText text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aspernatur corrupti praesentium, distinctio velit placeat adipisci magnam aut maxime perferendis repellendus fugiat fuga omnis esse animi minima iste facere fugit?"} />


            <ProjectDetails 
                isOpen={modalOpen}
                selectedProject={selectedProjectPath}
                selectedGitHubRepository={selectedGitHubRepository}
                handleClose={handleClose}
            />


            <Box sx={{mt: "1em"}}>
                <Grid container columnSpacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>

                    {projectsPageContent.map((project, index) => (

                        <Grid item xs={12} sm={12} md={6} key={index}>
                            <ProjectCard 
                                project={project}
                                setModalOpen={handleOpen}
                                setSelectedProjectPath={setSelectedProjectPath}
                                setSelectedGitHubRepository={setSelectedGitHubRepository}
                            />
                        </Grid>
                    ))}

                </Grid>
            </Box>

        </Container>
    );
}

export default ProjectsPage;