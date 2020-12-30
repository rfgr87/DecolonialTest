import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import image5 from './foto-simbiosis5.jpg';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image5,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 700

  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30%',
  },
}));

function Logo(props) {
    const classes = useStyles();
    const { post } = props;
  
    return (
  
      <Paper className={classes.mainFeaturedPost2} 
      style={{ 
        backgroundImage: `url(${image5})`,
        height: 2000,
        backgroundSize: 'center',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0, 
        position: 'relative'}}>
      </Paper>
    );
  }

export default Logo

Logo.propTypes = {
  post: PropTypes.object,
};
