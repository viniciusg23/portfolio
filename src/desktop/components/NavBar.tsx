import { Box, AppBar, Container, Toolbar, IconButton, Menu, MenuItem, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { useState, MouseEvent } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion"
import PageOptions from "./PageOptions";
import { pages } from "../../configuration/PagesConfiguration";



function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 1.5 }}
            
        >
            <AppBar 
                position="relative"
                sx={{
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue("--primary"),
                    height: "8vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} 
                className="primary"
            >
                <Container >
                    <Toolbar disableGutters>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                                justifyContent: "space-evenly"
                            }}
                        >
                            <PageOptions />
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </motion.div>
    );
}
export default NavBar;
