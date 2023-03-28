import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar=()=>{
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Live score
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;