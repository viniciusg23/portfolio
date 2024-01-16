import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { pages } from "../../configuration/PagesConfiguration";


function PageOptions() {

    const navigate = useNavigate();

    let delay = 0;

    return (
        <>
            {pages.map((page) => {

                const currentDelay = 2 + delay;
                delay += 0.2;

                return (
                    <motion.div
                        key={page.path}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, type: "spring", delay: currentDelay}}
                    >
                        <Typography
                            sx={{ 
                                my: 2, 
                                color: "white", 
                                display: "block",
                                fontSize: "1.2em",
                            }}
                            className="page-button"
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