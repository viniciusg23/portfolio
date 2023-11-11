import { Box, AppBar, Container, Toolbar, IconButton, Menu, MenuItem, Typography, Button } from "@mui/material";
import { useState, MouseEvent } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion"
import PageOptions from "./PageOptions";

export interface IPageOption {
    name: string;
    path: string;
}

const pages: IPageOption[] = [
    { name: "Home", path: "" },
    { name: "About", path: "about" },
    { name: "Education", path: "education" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Skills", path: "skills" },
    { name: "Contact", path: "contact" }
];


function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="absolute" sx={{backgroundColor: "#000000", paddingY: "0.4em"}} >
            <Container maxWidth="xl">
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
                        <PageOptions pages={pages} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
