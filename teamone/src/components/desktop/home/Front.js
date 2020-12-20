import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import bckImage from '../../../assets/images/1871775.jpeg'


const useStyles = makeStyles((theme) => ({

    front:{
      height:'80vh',
      backgroundImage: `url(${bckImage})`
    },
    h1Text:{
      padding:50,
      fontWeight:'bold',
    },
    description:{
     
    }
  }));

function Front(props) {
    const classes = useStyles();

    return (
        <div className={classes.front}>
            <Typography variant="h2" component="h2" gutterBottom className={classes.h1Text}>
              Welcome to Our Blog
            </Typography>
            <Grid container alignItems="center" justify="center">
              <Grid item xs={6}>
                <Typography variant="p" component="h2" gutterBottom className={classes.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                </Typography>
              </Grid>
            </Grid>
          </div>
    );
}

export default Front;