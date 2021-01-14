import React from 'react';
import {Link} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom';
import {Router} from "react-router-dom";
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import image2 from './foto-kogi.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


function Composers(props) {


 
  return (

    <Paper 
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
       }}>Compositores</h1>
            
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Renzo Filinich</Link><br></br><br></br>
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Diego Villaseñor De Cortinas</Link><br></br><br></br>
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Felipe Corredor Tréllez</Link><br></br><br></br>
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Daniel Flores Días</Link><br></br><br></br>
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Pedro Franco Fraticelli</Link>
              
{/*               
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Leonel Segovia</Link><br></br><br></br>
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
              marginTop: "10"}} activeStyle={{color: 'red'}}> Byron Muñoz</Link> */}
          </div>       
    </Paper>

  
    )
  }


export default Composers