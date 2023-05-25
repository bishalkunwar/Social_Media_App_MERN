import React,{ useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import {useDispatch} from 'react-redux';
import useStyles from "./styles";
import Input from './Input';

// const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

    const classes = useStyles();
    // const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    // // const isSignUp =true;
    const [isSignUp, setIsSignUp] = useState(true);
    //const [form, setForm] = useState(initialState);
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
   
    const handleSubmit = () => {
       
    };

    const handleChange = () => {

    };

    const switchMode = () => {
        // setForm(initialState);
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
        setShowPassword(false);

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

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
                        { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>

                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {isSignUp?"Sign Up":"Sign In"}
                    </Button>
                    <Grid container justify='flex-end'>
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp?"Already have an account? Sign In": "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    
    )
};

export default Auth;



// {/* <Container component="main" maxWidth="xs">
//         <Paper className={classes.paper} elevation={3}>
//             <Avatar className={classes.avatar}>
//                 <LockOutlinedIcon/>
//             </Avatar>
//             <Typography variant='h5'> {isSignUp ? "Sign Up" : "Sign in"}</Typography>
//                 <form className={classes.form} onSubmit={handleSubmit}>
//                     <Grid container spacing={2}>
//                         {isSignUp && (
//                             <>
//                                 <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
//                                 <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
//                             </>
//                         )}

//                         <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
//                         <Input name="password" label="password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/>
//                     </Grid>

//                     <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
//                         {isSignUp?"Sign In":"Sign up"}
//                     </Button>
//                     <Grid container justify='flex-end'>
//                             <Grid item>
//                                 <Button onClick={switchMode}>
//                                     {isSignUp?"Already have an account? Sign In": "Don't have an account? Sign Up"}
//                                 </Button>
//                             </Grid>
//                     </Grid>
//                 </form>
            
//         </Paper>
//     </Container> */}