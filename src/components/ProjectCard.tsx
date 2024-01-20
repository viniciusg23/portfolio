import { Visibility, GitHub } from "@mui/icons-material";
import { Paper, Typography, IconButton, Divider, Chip, Avatar, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProjectsPageContent } from "../data/projectsPageContent";
import { outsideLink } from "../helpers/outsideLink";




function ProjectCard(props: IProjectsPageContent) {

    const { name, url, gitHubRepository, stack, description } = props;

    const theme = useTheme();
    const navigate = useNavigate();

    const [lineCount, setLineCount] = useState<number>(4); // Inicializa com 4 linhas
    const typographyRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Atualiza o número de linhas com base na altura disponível
        if (typographyRef.current) {
            const typographyHeight = typographyRef.current.clientHeight;
            const lineHeight = parseInt(
                window.getComputedStyle(typographyRef.current).lineHeight
            );
            const newLineCount = Math.floor(typographyHeight / lineHeight);
            setLineCount(newLineCount);
        }
    }, [description]);

    return (

        <Paper
            sx={{
                marginBottom: 3,
                padding: "1em",
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                height: "35vh",
                position: "relative"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography color={theme.palette.background.default} fontWeight={700} fontSize="1.25em">
                    {name}
                </Typography>
                <Box>
                    {url &&
                        <IconButton onClick={() => outsideLink(url)}>
                            <Visibility htmlColor={theme.palette.background.default} />
                        </IconButton>
                    }
                    <IconButton onClick={() => outsideLink(gitHubRepository)}>
                        <GitHub htmlColor={theme.palette.background.default} />
                    </IconButton>
                </Box>
            </Box>

            <Divider sx={{ backgroundColor: theme.palette.primary.light }} />

            <Box
                sx={{
                    textAlign: "left",
                    mt: "0.5em",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.25em"
                }}
            >

                {stack.map((tech, index) => (
                    <Chip
                        size="small"
                        avatar={<Avatar alt={tech.name} src={`https://skillicons.dev/icons?i=${tech.skillIconName}`} />}
                        label={tech.name}
                        sx={{
                            color: theme.palette.primary.contrastText,
                            backgroundColor: theme.palette.primary.light,
                        }}
                    />
                ))}

            </Box>

            <Box>
                <Typography
                    
                    textAlign="left"
                    color="primary.contrastText"
                    mt="0.5em"
                >
                    {description}
                </Typography>
            </Box>
            

            <Box
                textAlign="left"
                sx={{
                    position: "absolute",
                    bottom: "1em"
                }}
            >
                <Typography
                    color="primary.contrastText"
                    sx={{
                        mt: "1em",
                        cursor: "pointer",
                        display: "inline-block",
                        "::after": {
                            content: "''",
                            display: "block",
                            width: 0,
                            height: "3px",
                            backgroundColor: "primary.contrastText",
                            transition: "width .3s"
                        },
                        ":hover": {
                            "::after": {
                                width: "40px"
                            }
                        }
                    }}
                    onClick={() => navigate(`/#`)}
                >
                    Detalhes &rarr;
                </Typography>
            </Box>


        </Paper>
    );
}

export default ProjectCard;