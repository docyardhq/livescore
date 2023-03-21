import { Button, CardActions, CardContent, Typography, Grid } from '@mui/material';
import React from 'react'
import Card from '@mui/material/Card';

const MyCard = ({match}) => {
    const getMatchCard=()=>{
        return (
            <Card>
                <CardContent>
                    
                    <Grid container justifyContent="center" alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant='h5'>First Team</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width:85}} src={require("../img/vs-41949.png")} alt="vs image"/>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'>Second Team</Typography>
                        </Grid>    
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent="center" spacing={3}>
                        <Button item variant='contained' color='primary'>
                            Show Details
                        </Button>
                        <Button item variant='contained' color='primary'>
                            {new Date().toString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        )
    };
    return getMatchCard();
}

export default MyCard