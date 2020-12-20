import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper"
import  '../../assets/css/main.css';
import { mainstyle, test } from '../../assets/js/main'
import Customer from '../Customers'
import Button from '@material-ui/core/Button';

function Main() {

    
    
    //const arry=[1,2,3,4,5]
    
  return (
      <Paper elevation={5}>
        <p style={mainstyle.p} > Mobile Version</p>
       {/*  <p>{count}</p> */}

    </Paper>
  );
}

export default Main;