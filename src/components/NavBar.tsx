import { Box, AppBar, Container } from "@mui/material";

import { motion } from "framer-motion"
import PageOptions from "./PageOptions";



function NavBar() {

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            
        >
            <AppBar 
                position="relative"
                elevation={0}
                sx={{
                    backgroundColor: "background.default",
                    height: "7vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} 
            >
                <Container >

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: "flex",
                                justifyContent: "space-evenly"
                            }}
                        >
                            <PageOptions />
                        </Box>

                </Container>
            </AppBar>
        </motion.div>
    );
}
export default NavBar;
