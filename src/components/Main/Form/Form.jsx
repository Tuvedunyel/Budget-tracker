import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './style';

const Form = () => {
    const classes = useStyles();


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select defaultValue="Income">
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select defaultValue="Salary">
                        <MenuItem value="Salary">Salary</MenuItem>
                        <MenuItem value="Food">Food</MenuItem>
                        <MenuItem value="Rent">Rent</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="date" fullWidth />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary">Create</Button>
        </Grid>
    );
};

export default Form;