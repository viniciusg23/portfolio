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
            <TypewriterText text={projectsPageContent.subTitle} />


            <ProjectDetails 
                isOpen={modalOpen}
                selectedProject={selectedProjectPath}
                handleClose={handleClose}
            />


            <Box sx={{mt: "1em"}}>
                <Grid container columnSpacing={3} columns={{ xs: 12, sm: 12, md: 12 }}>

                    {projectsPageContent.projects.map((project, index) => (

                        <Grid item xs={12} sm={12} md={6} key={index}>
                            <ProjectCard 
                                project={project}
                                setModalOpen={handleOpen}
                                setSelectedProjectPath={setSelectedProjectPath}
                            />
                        </Grid>
                    ))}

                </Grid>
            </Box>

        </Container>
    );
}

export default ProjectsPage;