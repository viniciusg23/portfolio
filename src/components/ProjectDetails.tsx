import { Box, Paper, Typography, Link as MuiLink, IconButton, Fade, Modal } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

import "github-markdown-css/github-markdown-light.css";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useIsMobile } from "../helpers/IsMobile";

interface IProjectDetailsProps {
    isOpen: boolean;
    selectedProject: string;
    handleClose: () => any;
}

function ProjectDetails(props: IProjectDetailsProps) {
    const { isOpen, selectedProject, handleClose } = props;
    const [readme, setReadme] = useState<string>("");
    const isMobile = useIsMobile();

    const Image = (props: any) => {
        const { alt, src, width } = props;

        if (src.startsWith('http://') || src.startsWith('https://')) {
            return <img alt={alt} src={src} style={{ width: width }} />;
        }

        return <img alt={alt} src={`https://raw.githubusercontent.com/${selectedProject}main/${src}`} style={{ width: width }} />;
    }

    const Link = (props: any) => {
        const { children, href } = props;

        if (href.startsWith('http://') || href.startsWith('https://')) {
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

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={isOpen}>
                <Paper sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    minWidth: "200px",
                    width: "90%",
                    maxWidth: "980px",
                    height: "90%",
                    overflow: "auto"
                }}>
                    <Box
                        sx={{
                            width: "100%",
                            backgroundColor: "primary.main",
                            paddingY: "1em",
                            position: "sticky",
                            top: 0,
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Box>
                            <Typography color="primary.contrastText" ml="1em">Detalhes buscados de: </Typography>
                            <MuiLink color="primary.contrastText" sx={{ cursor: "pointer" }}>https://github.com/viniciusg23/stock-manager</MuiLink>
                        </Box>
                        <IconButton aria-label="delete">
                            <Close />
                        </IconButton>
                    </Box>

                    <Box
                        className="markdown-body"
                        sx={{
                            padding: isMobile ? "15px" : "45px",
                        }}
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

                </Paper>
            </Fade>
        </Modal>
    );
}


export default ProjectDetails;
