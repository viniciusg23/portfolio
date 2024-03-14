import { Box, Container, Typography, useTheme } from "@mui/material";
import Title from "../components/Title";
import { skillPageContent, categories } from "../data/skillPageContent";
import SkillElement from "../components/SkillElement";
import SubTitle from "../components/SubTitle";
import TypewriterText from "../components/TypewriterText";


function SkillsPage() {

    const theme = useTheme();

    return (
        <Container
            maxWidth="sm"
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
                }}
            >
                <Box
                    maxWidth="sm"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >

                    <TypewriterText text={skillPageContent.content} />

                    {Object.keys(categories).map((category, index) => (
                        <Box
                            key={category}
                            style={{
                                marginBottom: "1em",
                            }}
                        >

                            <SubTitle title={categories[category as keyof typeof categories]} />

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "0.75em",
                                    flexWrap: "wrap",
                                    justifyContent: "start",
                                    mt: "1em"
                                }}
                            >
                                {skillPageContent.skills.map((skill, index) => {
                                    if (skill.category === category)
                                        return (
                                            <SkillElement
                                                key={index}
                                                name={skill.name}
                                                description={skill.description}
                                                learnMoreUrl={skill.learnMoreUrl}
                                                category={skill.category}
                                                iconUrl={skill.iconUrl}
                                                skillIconId={skill.skillIconId}
                                            />
                                        )
                                })}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

        </Container >
    );
}

export default SkillsPage;