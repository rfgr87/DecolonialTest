import React from 'react';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom';
import {Router} from "react-router-dom";
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import image2 from './foto-simbiosis2.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
    paddingLeft: '30%'
  },
}));

function Composers(props) {

  const classes = useStyles();
  const { post } = props;

 
  return (

    <Paper className={classes.mainFeaturedPost}
    style={{ 
      backgroundImage: `url(${image2})`,
      height: "1000px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      margin: "0px",
      padding: "30px"}}> 
         <div>

     <h1 style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "50px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      backgroundColor: "#6666FF",
      width: "85%",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "0.7"
       }}>Compsitores</h1>
            
            <Link to='/composer1'> Pedro Franco Fraticelli</Link><br></br>
            <Link to='/composer2'> Elimar Alicia Chardón</Link>
          </div>
        
    </Paper>

  
    )
  }


export default Composers