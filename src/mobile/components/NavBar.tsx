import { Box, AppBar, Container, Toolbar } from "@mui/material";
import { motion } from 'framer-motion';
import PageOptions from './PageOptions';


function NavBar() {


    return (

        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
        >
            <AppBar 
                elevation={0}
                position="relative"
                sx={{
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--background"),
                    height: "7vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} 
                className="primary"
            >
                <Container>
                    <Toolbar disableGutters>

                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
                            <PageOptions />
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </motion.div>
    );
}

export default NavBar;