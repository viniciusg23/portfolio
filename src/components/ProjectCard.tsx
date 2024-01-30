import { Visibility, GitHub } from "@mui/icons-material";
import { Paper, Typography, IconButton, Divider, Chip, Avatar, Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IProjectContent } from "../data/projectsPageContent";
import { outsideLink } from "../helpers/outsideLink";


interface IProjectCardProps {
    project: IProjectContent;
    setModalOpen: () => void;
    setSelectedProjectPath: (project: string) => void;
}

function ProjectCard(props: IProjectCardProps) {

    const { projectName, url, username, repositoryName, gitHubRepository, stack, description } = props.project;
    const theme = useTheme();

    return (

        <Paper
            sx={{
                marginBottom: 3,
                padding: "1em",
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                position: "relative"
            }}
        >

            <style>
                {`
                    ::-webkit-scrollbar {
                        width: 0.25em;
                        height: 0.25em;
                    }

                    ::-webkit-scrollbar-thumb {
                        background-color: ${theme.palette.background.paper};
                        border-radius: 1.5em;
                    }

                    ::-webkit-scrollbar-track {
                        background-color: ${theme.palette.primary.main};
                        
                    }
                `}
            </style>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography color={theme.palette.background.default} fontWeight={700} fontSize="1.25em">
                    {projectName}
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
                    mt: "0.5em",
                    height: "25vh",
                    overflow: "auto"
                }}
            >
                <Box
                    sx={{
                        textAlign: "left",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.25em",
                        position: "sticky",
                        top: 0
                    }}
                >

                    {stack.map((tech, index) => (
                        <Chip
                            key={index}
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
            </Box>



            <Box textAlign="left">
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
                    onClick={() => {
                        props.setModalOpen();
                        props.setSelectedProjectPath(`${username}/${repositoryName}/`);
                    }}
                >
                    Detalhes &rarr;
                </Typography>
            </Box>


        </Paper>
    );
}

export default ProjectCard;