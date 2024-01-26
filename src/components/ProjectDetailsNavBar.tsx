import { Close } from "@mui/icons-material";
import { Typography, IconButton, Link, Box, useTheme } from "@mui/material";
import { useIsMobile } from "../helpers/IsMobile";


interface IProjectDetailsNavBarProps {
    selectedGitHubRepository: string;
    handleClose: () => any;
}

function ProjectDetailsNavBar(props: IProjectDetailsNavBarProps) {

    const { selectedGitHubRepository, handleClose } = props;

    const theme = useTheme();
    const isMobile = useIsMobile();

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "primary.main",
                paddingY: "0.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >

            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                }}
            >
                <Typography
                    width="100%"
                    color="primary.contrastText"
                    textAlign="left"
                >
                    Detalhes buscados de:
                </Typography>
                <Link
                    sx={{
                        cursor: "pointer",
                        color: "primary.contrastText",
                        filter: "brightness(0.75)"
                    }}
                    href={selectedGitHubRepository}
                    target="_blank"
                >
                    <Typography
                    // sx={{
                    //     overflow: "hidden",
                    //     textOverflow: "ellipsis",
                    //     whiteSpace: "nowrap",
                    // }}
                    >{selectedGitHubRepository}</Typography>
                </Link>

            </Box>
            <IconButton color="inherit" onClick={handleClose}>
                <Close htmlColor={theme.palette.primary.contrastText} />
            </IconButton>
        </Box>
    );
}

export default ProjectDetailsNavBar;