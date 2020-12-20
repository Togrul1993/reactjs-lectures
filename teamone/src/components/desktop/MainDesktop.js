import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper"
import  '../../assets/css/main.css';
import { mainstyle, test } from '../../assets/js/main'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Front from './home/Front'
import Articles from './home/Articles'
import ContactUS from './home/ContactUs'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
}));
function Main() {

    const classes = useStyles();

    //const arry=[1,2,3,4,5]
    
  return (
      <Paper elevation={5}>
        <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Front />
        </Grid>
        <Grid item xs={12}>
          <Articles />
        </Grid>
        <Grid item xs={12}>
          <ContactUS />
        </Grid>
        
      </Grid>
    </div>
    </Paper>
  );
}

export default Main;