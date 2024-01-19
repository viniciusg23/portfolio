import { Container } from "@mui/material";
import Title from "../components/Title";

function SkillsPage() {
    return (  
        <Container
            maxWidth="lg"
            sx={{
                height: "100%",
            }}
        >
            <Title title="Habilidades"/>
        </Container>
    );
}

export default SkillsPage;