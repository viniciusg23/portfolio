import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pages } from "../configuration/PagesConfiguration";


function PageOptions() {

    const navigate = useNavigate();

    let delay = 0;

    return (
        <>
            {pages.map((page) => {

                const currentDelay = 1.5 + delay;
                delay += 0.3;

                return (
                    <motion.div
                        key={page.path}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, type: "spring", delay: currentDelay}}
                    >
                        <Typography
                            sx={{ 
                                cursor: "pointer",
                                display: "inline-block",
                                "::after": {
                                    content: "''",
                                    display: "block",
                                    width: 0,
                                    height: "3px",
                                    backgroundColor: "primary.main",
                                    transition: "width .3s" 
                                },
                                ":hover": {
                                    "::after": {
                                        width: "40px"
                                    }
                                }
                            }}
                            onClick={() => navigate(`/${page.path}`)}
                        >
                            {page.name}
                        </Typography>
                       
                    </motion.div>
                );
            })}
        </>
    );
}

export default PageOptions;