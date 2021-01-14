import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import image1 from './foto-pedro1.png';
import image2 from './foto-pedro2.jpg';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import Vimeo from '@u-wave/react-vimeo';

function Composer6(props) {


    return (
      <div style={{ 
      backgroundImage: `url(${image2})`,
      height: "120%",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingBottom: "80%",  
      paddingTop: 24,
      marginTop: -24,
      marginLeft:"0%"
      }}>
    <div>
     <h1 style={{
      position: 'relative',
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      marginLeft: "1%",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Felipe Corredor Tréllez</h1>
      </div>

      <div
      style={{
        position: "absolute",
        color:"white", 
        marginLeft: "43%",
        marginTop: "2%",
        paddingTop: "0px",
        width: "100%",
        textWidth: "10px",
        justifyText: "left",
        opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/pedrofraticellimusic/cadaveres-violentos-en-vivo-recital-de-graduacion"
       ></ReactPlayer>
      
      </div>

      <div
      style={{
        position: "absolute",
        color:"white", 
        marginLeft: "43%",
        marginTop: "16%",
        paddingTop: "0px",
        width: "100%",
        textWidth: "10px",
        justifyText: "left",
        opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/pedrofraticellimusic/propaganda-y-violencia-en-vivo-recital-flores-marchitas-flores-nuevas"
       ></ReactPlayer>      
      </div>

      <div
      style={{
        position: "absolute",
        color:"white", 
        marginLeft: "43%",      
        marginTop: "30%",
        paddingTop: "0px",
        width: "100%",
        textWidth: "10px",
        justifyText: "left",
        opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/pedrofraticellimusic/lo-bonito-y-lo-violento"
       ></ReactPlayer>      
      </div>

      <iframe style={{
      position: "absolute",
      marginLeft: "43%",
      marginTop: "45%"
       }} width="38%" height="15%" src="https://www.youtube.com/embed/gzowS2qa6vE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe style={{
      position: "absolute",
      marginLeft: "43%",
      marginTop: "70%"
       }} width="38%" height="15%" src="https://www.youtube.com/embed/gzowS2qa6vE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
      <h5 style={{
      marginLeft: "250px",
      positions: "absolute",
      opacity: "1.0",
      marginLeft: "1%",
      marginBottom: "-300px",
      height: "620px",
      widht: "400px",
      backgroundImage: `url(${image1})`,
      backgroundSize: "400px 300px",
      backgroundRepeat: "no-repeat",
       }}></h5>

      <div>
      <h5 style={{
      position: "absolute",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "80%",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "1%",
      marginTop: "-0.5%",
      border: "black",
      borderWidth: "3px",
      borderStyle: "outset",
      padding: "25px",
      backgroundColor: "white",
      width: "30%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0"
       }}> {"Pedro Emanuel Franco Fraticelli (1988-)"}<br></br><br></br>
       {"Es un guitarrista eléctrico, cantautor, productor de teatro y compositor puertorriqueño. El trabajo de Pedro se ha realizado en Carnegie Mellon School of Drama; Nuyorican Poets Cafe; Casa Cultural Ruth Hernández; Universidad de Puerto Rico; Ateneo Puertorriqueño; The Gallery Inn; Paseo de los Artistas VIP; y el Conservatorio de Música de Puerto Rico, entre otros. También músico, Pedro es fundador del podcast Colectivo Simbiosis, Conversaciones Simbióticas y la Serie de Conciertos de Jóvenes Artistas."}<br></br><br></br>
       {"Pedro tiene una licenciatura en Composición Musical del Conservatorio de Música de Puerto Rico. Su trabajo composicional es experimental y sensible a la conciencia del escucha; vacila constantemente entre la experimentación musical y el formato de concierto. Algunos de sus temas de investigación son: el “poli-arte”, incorporando elementos teatrales, culturales y urbanos (como el reggaetón y el trap); además del “folclor boricua”, como la utilización del jíbaro y el cuatro puertorriqueño (instrumento nacional), apagones y la utilización de generadores de electricidad, entre otras particularidades humorísticas -y otras no tanto- del curso de la vida -y lo que pudiera considerarse “la odisea de sobrevivir”- en la isla de Puerto Rico."}<br></br><br></br> 
       {"Otro de los temas importantes que utiliza para sus propuestas musicales es la priorización del mensaje, enfatizando en lo literal y directo, más que en la estética y abstracción musical. Esto se ve en obras de índole de crítica social, y de protesta, tocando temas como: la religión, la violencia de género, la austeridad, sátiras al (ex)gobernador corrupto (destituido recientemente de la gobernación) y en la animación de voces violentas asesinadas por alguna injusticia social; entre otras... de nuevo, particularidades puertorriqueñas."}
         </h5>
       </div>
       <br></br>   
      
    <div>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "100%",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              marginLeft: "1%",
              marginTop: "80%",
              paddingTop: "0px",
              borderWidth: "1px",
              position: "absolute",
              opacity: "1.0",
              width: "10.0%"}} activeStyle={{color: 'red'}}>  Compositores  </Link>   
    </div>   
   
    </div> 
    )
  }

  export default Composer6
