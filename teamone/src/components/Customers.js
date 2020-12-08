import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper"
import Button from '@material-ui/core/Button';


  
function Customer(props) {
    let {count,text,testBla}=props
    const decreaseMeLocal=()=>{
        count=count-1
        testBla(count)
    }
  return (
      <Paper elevation={5}>
        <h3>Number of Customers</h3>
        <p>{props.count}</p>
  <p>Attention! { count===0 ? null : text}</p>
  
    <Button variant="contained" disabled={count===0 ? true : false} color="secondary" component="span" onClick={decreaseMeLocal}>
          Decrease Customers
        </Button>
    </Paper>
  );
}

export default Customer;
