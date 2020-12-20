import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper"
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"   
const useStyles = makeStyles({
    contactUsField:{
        margin:30
    },
    contactUsBck:{
        backgroundColor:'gray',
        padding:50
    },
    contactUsForm:{
        padding:50
    }
  });

function ContactUs(props) {
    const classes = useStyles();

    return (
        <div className={classes.contactUsBck}>
            <Grid container justify="center">
                <Grid item xs={6}>
                    {/* Togrul Task */}
                    {/* 1. Dizayn uzerinde islemek
                        2. Button Click Alert versin */}
                    <Typography gutterBottom variant="h5" component="h2">
                            Contact Us
                    </Typography> 
                </Grid>
                <Grid item xs={6}>
                    
                    <Paper className={classes.contactUsForm}>
                        <Grid container justify="center">
                            <Grid item xs={8}>
                                <TextField fullWidth required id="standard-required" label="Name" placeholder="Name" className={classes.contactUsField}/>
                                <TextField fullWidth required id="standard-required" label="Email" placeholder="Email" className={classes.contactUsField}/>
                                <TextField
                                fullWidth
                                    id="standard-multiline-static"
                                    label="Your opinion or request"
                                    placeholder="Your opinion or request"
                                    multiline
                                    className={classes.contactUsField}
                                    rows={4}
                                    />
                                    <Button variant="contained" color="primary">
                                        Submit
                                    </Button>
                            </Grid>

                        </Grid>
                       
                    </Paper>
                </Grid>
                </Grid>
            
        </div>
    );
}

export default ContactUs;