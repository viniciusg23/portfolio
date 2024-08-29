import { Box, Container } from "@mui/material";
import Title from "../components/Title";
import TypewriterText from "../components/TypewriterText";
import IconCloud from "../components/magicui/icon-cloud";
import { skillPageContent } from "../data/skillPageContent";


function SkillsPage() {

    return (
        <Container
            maxWidth="lg"
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
                    mt: "2em"
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