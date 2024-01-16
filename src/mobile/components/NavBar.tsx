import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import { pages } from '../../configuration/PagesConfiguration';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const toggleDrawer = () => {
        setIsOpen(prevState => !prevState);
    }
        

    return (
        <div>
            
            <Box textAlign="left">
                <IconButton size="large" onClick={toggleDrawer} >
                    <Menu className="background"/>
                </IconButton>
            </Box>
            

            <Drawer
                anchor={"top"}
                open={isOpen}
                onClose={toggleDrawer}
                sx={{zIndex: 2}}
            >
                <List className="primary" sx={{zIndex: 2}}>
                    {pages.map((page) => (
                        <ListItem key={page.name} disablePadding>
                            <ListItemButton 
                                sx={{textAlign: "center"}} 
                                onClick={() => {
                                    toggleDrawer();
                                    navigate(`/${page.path}`);
                                }}
                            >
                                <ListItemText>
                                    <Typography className="page-button">{page.name}</Typography>    
                                </ListItemText> 
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
                
            
        </div>
    );
}

export default NavBar;