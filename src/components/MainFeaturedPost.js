import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import image2 from './foto-decolonial222.png';
import image1 from './foto-decolonial1.jpg';
import image3 from './foto-loiza.png';



const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image1,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 600

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
      <div style={{ 
        backgroundImage: `url(${image2})`,
        height: 1000,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        margin: -24,
        padding: 24}}>
  
    <Paper className={classes.mainFeaturedPost} >
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
      color:"red", 
      fontFamily: "Menlo",
      fontSize: "45px",
      fontWeight: "normal",
      fontStyle: "normal",
      paddingTop: "5%",
      paddingLeft: "15%",
      positions: "relative",
      backgroundColor: "#000000",
      opacity: "1.0",
      marginLeft: "5%",
      width: "67%",
      backgroundImage: `url(${image3})`,
      paddingBottom: "5%",

       }}> 
       {"[Decolonialidad, Apropiación, Futurismo]"}<br></br></h5>
       <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "35px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "150px",
      bottomMargin: "20px",
      paddingLeft: "20px",
      paddingBottom: "140px",
      positions: "relative",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "15%",
      width: "20%",
      backgroundImage: `url(${image1})`,
       }}> 
       {"Decolonial Records"}<br></br></h5>
      <h5 style={{
      color: "black", 
      fontFamily: "Menlo",
      fontSize: "35px",
      fontWeight: "bold",
      marginTop: "0px",
      marginBottom: "10px",
      fontStyle: "normal",
      paddingTop: "10px",
      paddingBottom: "10px",
      positions: "absolute",
      backgroundColor: "#00FFFF",
      opacity: "1.0",
      marginLeft: "15%",
      width: "75%"
       }}> 
       {"Está dedicado a la música contemporánea y experimental"}<br></br>
      {"Latino Americana"}<br></br>
      {"con la misión de formar mediante actos decoloniales"}<br></br>
      {"no solo una identidad futurística Latino Americana"}<br></br>
      {"pero también una reinvindicación de la ancestral"}<br></br>
      {"mediante propuestas estéticas y conceptuales."}</h5>
    </Paper>
    </div>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
