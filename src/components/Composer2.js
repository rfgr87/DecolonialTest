import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image4 from './foto-simbiosis4.jpg';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image4,
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

function Composer2(props) {

  const classes = useStyles();
  const { post } = props;

    return (
    <Paper className={classes.mainFeaturedPost} 
    style={{ 
      backgroundImage: `url(${image4})`,
      height: 1500,
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
       }}>Elimar Alicia Chardón</h1>

      <h5 style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      margin: 0,
      paddingTop: "0px",
      backgroundColor: "black",
      width: "85%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "0.7"
       }}> {"Yo soy Elimar Alicia Chardón y soy una compositora y improvisadora!"}<br></br>
       {"oaisurhfvjasrvjaosinvrjoirsnvojraisnvjkonisojrvoiknsjoiknjo"}<br></br>
       {"aokjviraivnjoinrsjjsnivjrasijvorjjdinjrodianjvajoinj"}<br></br>
       {"ajsoinrvjajrtinarjdtijrinjrnadgavjvrainvdgaojronv" }<br></br>
       {"okajisrjvjainbrsvinbjvbrjjgjrnasjrsnjjsoainjgdjvrnsgdjns"}</h5><br></br>
      <Link to='/compositores'>  Compositores  </Link>
   
    </div>
    </Paper>
    )
  }
  
export default Composer2
