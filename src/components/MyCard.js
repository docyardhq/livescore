import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
const MyCard =({match})=>{
    //const [detail, setDatail] = useState({});
    //const [open, setOpen] = useState(false);

    const getMatchCard=()=>{
        return (
            <Card>
                <CardContent>
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">First Team</Typography>
                        </Grid>
                        <Grid item>
                            <img styles={{width:85}} src={require("../image/vs.png")} alt="versus"/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Second Team</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="center" spacing={3}>
                    <Button item variant="contained">
                        Show Details
                    </Button>
                    <Button item variant="contained">
                        {new Date().toDateString()}
                    </Button>

                    </Grid>
                    
                </CardActions>
            </Card>
        )
    }

    return getMatchCard()
};


export default MyCard;