import React from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";

import useStyles from "./styles";


const Auth = () => {

    const classes = useStyles();
    const state = null;  
    const isSignUp = false;
    
    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    
    return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'> {isSignUp ? "Sign Up" : "Sign in"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                            </>
                        )}
                    </Grid>
                </form>
            
        </Paper>
    </Container>
    )
};

export default Auth;