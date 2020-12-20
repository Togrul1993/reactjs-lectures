import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper"
import  '../assets/css/main.css';
import { mainstyle, test } from '../assets/js/main'
import Customer from './Customers'
import Button from '@material-ui/core/Button';

class MainClass extends Component {
    constructor() {
        super()
        this.state = {
          count:0,
          price:10
        }
      }
    increaseMe = () =>{
        this.setState({count:this.state.count+1})
        this.setState({price:50})
    }
    decreaseMe = () =>{
        this.setState({count:this.state.count-1})
    }
    render() {
        const {count,price}=this.state
        return (
        <Paper elevation={5}>
            <p style={mainstyle.p} >Hello New Component </p>
        {/*  <p>{count}</p> */}
            <Button variant="contained" color="primary" component="span" onClick={this.increaseMe}>Increase </Button>
            <Button variant="contained" color="primary" component="span" onClick={this.decreaseMe}>Increase </Button>
            <Paper>{count}</Paper>
            <Paper>{price}</Paper>
            <Customer count={count} text='New Customers received' test="TEST" testBla={this.decreaseMe}/>
            
        </Paper>
        );
    }
}

export default MainClass;