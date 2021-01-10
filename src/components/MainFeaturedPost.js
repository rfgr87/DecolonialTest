import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import image2 from './foto-decolonial222.png';
import image1 from './foto-decolonial1.jpg';
import image3 from './foto-loiza.png';



function MainFeaturedPost(props) {



    return (
      <div style={{ 
        backgroundImage: `url(${image2})`,
        height: 800,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: "100%",
        margin: -24,
        padding: 24}}>
    <h5 style={{position: "absolute", marginTop: "2px", backgroundColor: "white", fontSize: "40px", width:"100%"}}>iajns</h5>

    <h5 style={{position: "absolute", marginTop: "450px", backgroundColor: "white", fontSize: "100px", width:"100%", marginLeft: "10px"}}>iajnsvoasn</h5>

    <div style = {{
    position: 'absolute',
    marginTop: '100px',
    backgroundColor: "white",
    backgroundColor: "white", //"#00FFFF",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 700,
    width: "45%",
    marginLeft: "10px"
  }}>
    <h1 style = {{
      position: "absolute",
      color: "black", 
      fontFamily: "Menlo", //"'Raleway', sans-serif",
      fontSize: "35px",
      fontWeight: "800",
      fontStyle: "normal",
      paddingTop: "0px",
      backgroundColor: "white", //"#6666FF",
      width: "75%",
      padding: "2px",
      textWidth: "1px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0",
      marginTop: "-15.75%"
       }}>Manifesto</h1>
       <h5 style={{
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "40px",
      fontWeight: "normal",
      fontStyle: "normal",
      paddingTop: "5%",
      paddingLeft: "5%",
      positions: "absolute",
      backgroundColor: "white", //"#000000",
      opacity: "1.0",   
      marginLeft: "5%",
      marginTop: "50px",
      width: "69%",
      // backgroundImage: `url(${image3})`,
      paddingBottom: "5%"
       }}> 
       {"[Decolonialidad, Apropiación, Futurismo]"}<br></br></h5>
       <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "15px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "130px",
      bottomMargin: "20px",
      padding: "10px",
      positions: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "5%",
      marginTop: "160px",
      backgroundImage: `url(${image1})`,
      width: "1000%"
       }}> 
     <br></br></h5>
      <h5 style={{
      color: "black", 
      fontFamily: "Menlo",
      fontSize: "15px",
      fontWeight: "bold",
      marginTop: "-78%",
      fontStyle: "normal",
      padding: 100,
      position: "absolute",
      backgroundColor: "white", //"#00FFFF",
      backgroundSize: "1000px",
      opacity: "1.0",
      marginLeft: "105%",
      width: "80%"
       }}> 
       {"Decolonial Records está dedicado a la música contemporánea y experimental Latino Americana con la misión de formar mediante actos decoloniales una identidad futurística Latino Americana abrazando el folclor y buscando el desprendimiento de asociaciones convenidas por el condicionamiento occidental."}<br></br>
       </h5>
    </div>

  <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "5%",
      marginTop: "55px",
      backgroundImage: `url(${image1})`,
      width: "2.5%"
       }}><br></br></h5>
       <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "21%",
      marginTop: "55px",
      backgroundImage: `url(${image1})`,
      width: "15%"
       }}><br></br></h5>

<h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "50%",
      marginTop: "55px",
      backgroundImage: `url(${image1})`,
      width: "5%"
       }}><br></br></h5>

<h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "75%",
      marginTop: "55px",
      backgroundImage: `url(${image1})`,
      width: "2%"
       }}><br></br></h5>

<h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "65%",
      marginTop: "55px",
      backgroundImage: `url(${image1})`,
      width: "1%"
       }}><br></br></h5>


    <h5 style={{
      color: "black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "5px",
      fontWeight: "bold",
      fontStyle: "normal",
      paddingTop: "10px",
      bottomMargin: "200px",
      padding: "10px",
      position: "absolute",
      backgroundColor: "black",
      opacity: "1.0",
      marginLeft: "85%",
      marginTop: "55px",
      backgroundImage: `url(${image1})`,
      width: "5%"
       }}><br></br></h5>
      


    </div>
    )
  }

export default MainFeaturedPost

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
