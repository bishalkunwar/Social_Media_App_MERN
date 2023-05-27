import React,{ useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core";
import {GoogleLogin} from 'react-google-login';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {useDispatch} from 'react-redux';
import useStyles from "./styles";
import Input from './Input';
import Icon from "./icon";
import { useHistory} from 'react-router-dom';
import {signUp, signIn} from "../../actions/auth";

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [form, setForm] = useState(initialState);
    
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
   
    const handleSubmit = (e) => {
       e.preventDefault();

       if(isSignUp){
        dispatch(signUp(form, history));
       }else{
        dispatch(signIn(form, history));
       }
    };

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

    const switchMode = () => {
        setForm(initialState);
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp);
        setShowPassword(false);

    };

    const googleSuccess = async(req, res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: {result, token} });
        } catch (error) {
            console.log(error);
            
        }
    }

    const googleError = () => alert('Google Sign In was unsuccessful, you can try again later');

    
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

                    <GoogleLogin 
                        clientId='290140167547-f67k59iugfv5aeo05qv9k71808sb93oj.apps.googleusercontent.com'

                        render = {(renderProps)=>(
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained"> 
                                Google SignIn
                            </Button>
                        )}

                        onSuccess={googleSuccess} onFailure={googleError} cookiePolicy='single_host_origin'
                    />

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