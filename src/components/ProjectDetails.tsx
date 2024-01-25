import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'

import "github-markdown-css/github-markdown-light.css";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
// import Image from "./markdown/Image";


// const imgLinks = require("@pondorasti/remark-img-links");



interface IProjectDetailsProps {
    isOpen: boolean;
    selectedProject: string;
    handleClose: () => any;
}


function ProjectDetails(props: IProjectDetailsProps) {
    const { isOpen, selectedProject, handleClose } = props;
    const [ readme, setReadme ] = useState<string>("");

    const Image = (props: any) => {    
        const {alt, src, width} = props;

        if (src.startsWith('http://') || src.startsWith('https://')) {
            return <img alt={alt} src={src} style={{width: width}}/>;
        }

        return <img alt={alt} src={`https://raw.githubusercontent.com/${selectedProject}main/${src}`} style={{width: width}}/>;
    }

    const Link = (props: any) => {
        const {children, href} = props;

        if (href.startsWith('http://') || href.startsWith('https://')) {
            return <a href={href} target="_blank">{children}</a>;
        }

        return <a href={`https://github.com/${selectedProject}tree/main/${href}`} target="_blank">{children}</a>;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(selectedProject){
                    const response = await fetch(`https://raw.githubusercontent.com/${selectedProject}main/README.md`);
                    const data = await response.text();
                    setReadme(data);
                    console.log(data)

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
                    maxWidth: "980px",
                    height: "90%",
                    overflow: "auto"
                }}>
                    
                    <Box
                        className="markdown-body"
                        sx={{
                            padding: "45px",
                        }}
                    >
                        <ReactMarkdown
                            components={{
                                img: Image,
                                a: Link
                            }}
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[
                                remarkGfm, 
                            ]}
                            children={readme}
                        />
                    </Box>
                    

                </Paper>
            </Fade>
        </Modal>
    );
}


export default ProjectDetails;
