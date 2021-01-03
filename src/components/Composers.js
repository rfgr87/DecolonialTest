import React from 'react';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom';
import {Router} from "react-router-dom";
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import image2 from './foto-kogi.jpg';
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
      height: "2000px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: "1500px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      margin: -14,
      padding: 14}}> 
         <div>

     <h1 style={{
      color:"Black", 
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
      opacity: "1.0"
       }}>Compsitores</h1>
            
            <Link to='/composer1'
            style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%",
              marginTop: "10"}} activeStyle={{color: 'red'}}> Roy F Guzmán</Link><br></br><br></br>
            <Link to='/composer2'
            style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Renzo Felinich</Link><br></br><br></br>
              <Link to='/composer3'
              style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Leonel Segovia</Link><br></br><br></br>
               <Link to='/composer4'
              style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Daniel Flores Dias</Link><br></br><br></br>
              <Link to='/composer5'
              style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Diego Villaseñor de Cortina</Link><br></br><br></br>
              <Link to='/composer6'
              style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Louis Aguirre</Link><br></br><br></br>
               <Link to='/composer7'
              style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Jorge Castro</Link><br></br><br></br>
               <Link to='/composer8'
              style={{
              color:"white", 
              fontFamily: "'Raleway', sans-serif",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              paddingTop: "0px",
              border: "blue",
              borderWidth: "1px",
              borderStyle: "outset",
              positions: "relative",
              backgroundColor: "#000000",
              opacity: "0.7",
              width: "75%", 
              marginTop: "10"}} activeStyle={{color: 'red'}}> Byron Muñoz</Link>
          </div>       
    </Paper>

  
    )
  }


export default Composers