import { Box, Container } from "@mui/material";
import Title from "../components/Title";
import { skillPageContent } from "../data/skillPageContent";
import SkillElement from "../components/SkillElement";

function SkillsPage() {

    return (
        <Container
            maxWidth="lg"
            sx={{
                height: "100%",
            }}
        >
            <Title title="Habilidades" />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "2em"
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        display: "flex",
                        gap: "1em",
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}
                >
                    {skillPageContent.map((skill, index) => (
                        <SkillElement 
                            key={index}
                            name={skill.name}
                            description={skill.description}
                            learnMoreUrl={skill.learnMoreUrl}
                            iconUrl={skill.iconUrl}
                            skillIconId={skill.skillIconId}
                        />
                    ))}

                </Container>
            </Box>



        </Container >
    );
}

export default SkillsPage;