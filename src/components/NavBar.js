import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import {MenuIcon} from "@mui/material";

const Navbar=()=>{
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton>
                    <MenuIcon>

                    </MenuIcon>
                </IconButton>
                <Typography variant="h6">Live Score</Typography>
            </Toolbar>

        </AppBar>

    );
};

export default Navbar;