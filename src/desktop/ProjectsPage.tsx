import { Container } from "@mui/material";
import Title from "../components/Title";

function ProjectsPage() {
    return (  
        <Container
            maxWidth="lg"
            sx={{
                height: "100%",
            }}
        >
            <Title title="Projetos"/>
        </Container>
    );
}

export default ProjectsPage;