import { Button, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'
import Card from '@mui/material/Card';

const MyCard = () => {
    const getMatchCard=()=>{
        return (
            <Card>
                <CardContent>
                    <Typography variant='h5'>This is our card</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' color='primary'>
                        Show Details
                    </Button>
                    <Button variant='contained' color='primary'>
                        {new Date().toString()}
                    </Button>
                </CardActions>
            </Card>
        )
    };
    return getMatchCard();
}

export default MyCard