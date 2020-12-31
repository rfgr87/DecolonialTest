import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import image2 from './foto-decolonial22.png';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image2,
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

function MainFeaturedPost(props) {

  const classes = useStyles();
  const { post } = props;

    return (
    <Paper className={classes.mainFeaturedPost} 
    style={{ 
      backgroundImage: `url(${image2})`,
      height: 1000,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24}}>
    <div>
    <h1 style={{
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "50px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Manifesto</h1>
       <h5 style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "50px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      positions: "relative",
      backgroundColor: "#000000",
      opacity: "1.0",
      marginLeft: "15%",
      width: "67%"
       }}> 
       {"[Decolonialidad, Apropiación, Futurismo]"}<br></br></h5>
       <h5 style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "25px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      positions: "relative",
      backgroundColor: "#000000",
      opacity: "1.0",
      marginLeft: "15%",
      width: "75%"
       }}> 
       Decolonial Records está dedicado a la música contemporánea y experimental Latino Americana con la misión de formar mediante actos decoloniales no solo una identidad futurística Latino Americana pero una reinvindicación de la ancestral mediante propuestas estéticas y conceptuales.</h5>
    </div>
    </Paper>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
