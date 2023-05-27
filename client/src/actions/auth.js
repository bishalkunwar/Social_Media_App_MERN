// import {AUTH} from "../constants/actionTypes";
// import * as api from "../api/index";

// export const signup = (formData, router) => async(dispatch) => {
//     try {
//         const {data} = await api.signUp(formData);
//         dispatch({type: AUTH, data});
        
//         router.push('/');
//     } catch (error) {
//         console.log(error);
//         console.log("error here");
//     }
// };

// export const signin = (formData, router) => async(dispatch)=> {

//     try {
//         const data = await api.signIn(formData);
//         dispatch({type: AUTH, data});
        
//         router.push("/");
//     } catch (error) {
//         console.log(error);
//     }
// };



import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signIn = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};