import { ArrowBack } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";
import { useIsMobile } from "../helpers/IsMobile";


interface IProjectDetailsNavBarProps {
    handleClose: () => any;
}

function ProjectDetailsNavBar(props: IProjectDetailsNavBarProps) {

    const { handleClose } = props;
    const isMobile = useIsMobile();

    return (
        <Box
            id="details-top"
            sx={{
                backgroundColor: "background.default",
                paddingY: "1em",
                paddingX: isMobile ? "15px" : "45px"
            }}
        >
            <IconButton color="primary" onClick={handleClose}>
                < ArrowBack />
            </IconButton>
        </Box>
    );
}

export default ProjectDetailsNavBar;