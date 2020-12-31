import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image6 from './foto-simbiosis6.jpg';

import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image6,
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

function Composer3(props) {

  const classes = useStyles();
  const { post } = props;

    return (
    <Paper className={classes.mainFeaturedPost} 
    style={{ 
      backgroundImage: `url(${image6})`,
      height: 800,
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
       }}>Julio E. Quiñones</h1>

      <h5 style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "35%",
      marginTop: "35%",
      paddingTop: "0px",
      backgroundColor: "black",
      width: "65%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "0.7"
       }}> {"Yo soy Julio Quiñones y soy una compositor!"}<br></br>
       {"oaisurhfvjasrvjaosinvrjoirsnvojraisnvjkonisojrvoiknsjoiknjo"}<br></br>
       {"aokjviraivnjoinrsjjsnivjrasijvorjjdinjrodianjvajoinj"}<br></br>
       {"ajsoinrvjajrtinarjdtijrinjrnadgavjvrainvdgaojronv" }<br></br>
       {"okajisrjvjainbrsvinbjvbrjjgjrnasjrsnjjsoainjgdjvrnsgdjns"}</h5>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              borderWidth: "1px",
              positions: "relative",
            //   backgroundColor: "#000000",
              opacity: "1.0",
              width: "75%", 
              marginBottom: "100px"}} activeStyle={{color: 'red'}}>  Compositores  </Link>
   
    </div>
    </Paper>
    )
  }
  
export default Composer3
