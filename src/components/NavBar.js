import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar=()=>{
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon>

                    </MenuIcon>
                </IconButton>
                <Typography variant="h6">Live Score</Typography>
            </Toolbar>

        </AppBar>

    );
};

export default Navbar;