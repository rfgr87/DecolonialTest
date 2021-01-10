import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import image3 from './foto-simbiosis3.jpg';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player"




function Composer5(props) {



    return (
    <Paper className={classes.mainFeaturedPost} 
    style={{ 
      backgroundImage: `url(${image3})`,
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
       }}>Pedro Franco Fraticelli</h1>

      <h5 style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "15px",
      marginTop: "0%",
      paddingTop: "0px",
      backgroundColor: "black",
      width: "25%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "0.7"
       }}> "Yo soy Pedro Franco Fraticelli. Compositor de música contemporánea Bricua.
       oaisurhfvja srvjaosin vrjoirsnvoj raisnvjkonisoj rvoiknsjoiknjo
       "aokjviraiv  njoinrsj jsnivjrasijv orjjdinjrodianjva joinj
       ajsoinrv ja jrtina rjdtijri njrnadgav jvrainv dgaojro nv
       okajisr jvjai nbrsv inbjvbrjjgjr nasjrsnjj soain jgdjvrn sgdjns"</h5>
       <br></br>
       <div
         style={{
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "45%",
      marginTop: "25%",
      paddingTop: "0px",
      backgroundColor: "black",
      width: "0%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer
        url="https://soundcloud.com/pedrofraticellimusic"
      />
      </div>
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

  export default Composer5
