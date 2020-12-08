import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper"
import  '../assets/css/main.css';
import { mainstyle } from '../assets/js/main'
import Customer from './Customers'
import Button from '@material-ui/core/Button';

const styles = {
    main:{color:'red'}
  };
  
function Main() {
    const [count, setCount]=useState(0);

    const increaseMe =()=>{
          setCount(count+1)
      }
    /* const decreaseMe=()=>{
        setCount(count-1)
    } */
  return (
      <Paper elevation={5}>
        <p style={mainstyle.p} >Hello New Component </p>
       {/*  <p>{count}</p> */}
        <Button variant="contained" color="primary" component="span" onClick={increaseMe}>Increase</Button>
        <Customer count={count} text='New Customers received' testBla={setCount}/>
    </Paper>
  );
}

export default Main;
