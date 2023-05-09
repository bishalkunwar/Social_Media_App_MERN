import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import {useDispatch} from "react-redux";

import useStyles from "./styles";


const Post = () => {

  const dispatch = useDispatch();  // dispatch will do the data loading dispatching.
  const classes = useStyles();

  return (
   <Card>
    <CardMedia>

    </CardMedia>

    <CardContent>

    </CardContent>

    <CardActions>
      
    </CardActions>
   </Card>
    
  )
};

export default Post;