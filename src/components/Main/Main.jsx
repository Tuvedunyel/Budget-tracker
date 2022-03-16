import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Divider } from '@material-ui/core';
import useStyles from './style';

const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powored by Speechly" />
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    InfoCard
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Main;