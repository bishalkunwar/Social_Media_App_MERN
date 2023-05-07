import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import {useSelector, useDispatch} from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from "./styles";

const Form = () => {

  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });


  const handleSubmit = () => {

  };
  
  return (
    <Paper className={classes.Paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
        <Typography variant='h6' >HELLO MEMORY</Typography>
        <TextField name='creator' variant='outlined' label='creator' fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.target.value})} />
        <TextField name='title' variant='outlined' label='title' fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value })} />
        <TextField name='message' variant='outlined' label='message' fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
        <TextField name='tags' variant='outlined' label='tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
        <div>
          <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})} />
        </div>
        <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small'  fullWidth>Clear</Button>
      </form>
    </Paper>
  )
};

export default Form;