import { Box, Container } from "@mui/material";
import Title from "../components/Title";
import { skillPageContent } from "../data/skillPageContent";
import TypewriterText from "../components/TypewriterText";
import IconCloud from "../components/magicui/icon-cloud";


function SkillsPage() {

    return (
        <Container
            maxWidth="sm"
            sx={{
                height: "100%",
            }}
        >
            <Title title="Habilidades" />
            <TypewriterText text={skillPageContent.content} />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <div className="">
                    <IconCloud iconSlugs={skillPageContent.skills} />
                </div>

            </Box>

        </Container >
    );
}

export default SkillsPage;