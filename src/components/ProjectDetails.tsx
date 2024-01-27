import { Box, Paper, Typography, Link as MuiLink, IconButton, Fade, Modal, useTheme, Fab } from "@mui/material";
import { Close, KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown"

import "github-markdown-css/github-markdown-light.css";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useIsMobile } from "../helpers/IsMobile";
import ProjectDetailsNavBar from "./ProjectDetailsNavBar";

interface IProjectDetailsProps {
    isOpen: boolean;
    selectedProject: string;
    handleClose: () => any;
}

function ProjectDetails(props: IProjectDetailsProps) {
    const { isOpen, selectedProject, handleClose } = props;
    const [readme, setReadme] = useState<string>("");

    const detailsModalRef = useRef<any>(null);
    const isMobile = useIsMobile();

    const Image = (props: any) => {
        const { alt, src, width } = props;
        if (src.startsWith("http://") || src.startsWith("https://")) {
            return <img alt={alt} src={src} style={{ width: width }} />;
        }
        return <img alt={alt} src={`https://raw.githubusercontent.com/${selectedProject}main/${src}`} style={{ width: width }} />;
    }

    const Link = (props: any) => {
        const { children, href } = props;
        if (href.startsWith("http://") || href.startsWith("https://")) {
            return <a href={href} target="_blank">{children}</a>;
        }
        return <a href={`https://github.com/${selectedProject}tree/main/${href}`} target="_blank">{children}</a>;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedProject) {
                    const response = await fetch(`https://raw.githubusercontent.com/${selectedProject}main/README.md`);
                    const data = await response.text();
                    setReadme(data);
                }
            } catch (erro) {
                console.error("Request Error:", erro);
            }
        };

        fetchData();
    }, [selectedProject]);

    const handleToTop = () => {
        if (detailsModalRef.current) {
            const element = detailsModalRef.current;

            if (element instanceof Element) {

                element.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={isOpen}>
                <Paper
                    ref={detailsModalRef}
                    sx={{
                        position: "absolute" as "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        minWidth: "200px",
                        width: isMobile ? "100%" : "90%",
                        maxWidth: "980px",
                        height: isMobile ? "100%" : "90%",
                        overflow: "auto",
                        outline: "none",
                        backgroundColor: "background.default"
                    }}
                >

                    <ProjectDetailsNavBar handleClose={handleClose} />

                    <Box
                        className="markdown-body"
                        sx={{ padding: isMobile ? "15px" : "45px" }}
                    >
                        <ReactMarkdown
                            components={{
                                img: Image,
                                a: Link
                            }}
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                            children={readme}
                        />
                    </Box>

                    <Fab
                        color="primary"
                        aria-label="Up"
                        sx={{
                            // display: "none",
                            position: "sticky",
                            bottom: "1em",
                            left: "100%",
                            mr: "1em"
                        }}
                        onClick={handleToTop}
                    >
                        <KeyboardArrowUp />
                    </Fab>


                </Paper>
            </Fade>
        </Modal>
    );
}


export default ProjectDetails;
