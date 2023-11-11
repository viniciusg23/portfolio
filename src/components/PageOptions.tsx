import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IPageOption } from "./NavBar";

interface IPageOptionsProps {
    pages: IPageOption[]
}

function PageOptions(props: IPageOptionsProps) {

    const navigate = useNavigate();

    const { pages } = props;
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
                        <Button
                            sx={{ my: 2, color: "white", display: "block" }}
                            onClick={() => navigate(`/${page.path}`)}
                        >
                            {page.name}
                        </Button>
                    </motion.div>
                );
            })}
        </>
    );
}

export default PageOptions;