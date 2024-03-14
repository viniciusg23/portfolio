import { Box, Container, Typography, useTheme } from "@mui/material";
import Title from "../components/Title";
import { skillPageContent, categories } from "../data/skillPageContent";
import SkillElement from "../components/SkillElement";
import TypewriterText from "../components/TypewriterText";


function SkillsPage() {

    const theme = useTheme();

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

                <Box
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {Object.keys(categories).map((category, index) => (
                        <Box
                            key={category}
                            style={{
                                width: "100%",
                                borderRight: index !== Object.keys(categories).length - 1 ? `solid 1px ${theme.palette.primary.main}50` : "",
                                paddingRight: "1em",
                                paddingLeft: "1em",
                                paddingBottom: "3em"
                            }}
                        >
                            <Typography
                                style={{ fontWeight: "600", fontSize: "1.2em", marginBottom: "1em" }}
                                textAlign="left"
                            >
                                {categories[category as keyof typeof categories]}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "0.75em",
                                    flexWrap: "wrap",
                                    justifyContent: "center",

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