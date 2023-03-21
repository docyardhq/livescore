import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";


const useStyle = makeStyles((theme) => {
    console.log("STYLE", theme);
  });
  
  const Navbar = () => {
    // eslint-disable-next-line
    const classes = useStyle();
  
    return (
      <div>
        <AppBar color="primary" position="static" style={{ flexFlow: 1 }}>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
  
            <Typography variant="h6">Live Score </Typography>
  
            <span style={{ flexGrow: 1 }}></span>
  
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
  
  export default Navbar;