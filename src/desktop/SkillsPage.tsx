import { Box, Container } from "@mui/material";
import Title from "../components/Title";
import { skillPageContent } from "../data/skillPageContent";
import SkillElement from "../components/SkillElement";
import { useState } from "react";

function SkillsPage() {

    const [alignment, setAlignment] = useState<"column" | "grid">('grid');

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: "column" | "grid") => {
        setAlignment(newAlignment);
    };

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
                    height: "90%",
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        display: "flex",
                        gap: "1em",
                        flexWrap: "wrap"
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