import React from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import image1 from './foto-renzo1.jpg';
import image2 from './foto-renzo2.jpg';
import image3 from './foto-renzo3.jpg';
import image4 from './foto-renzo4.jpg';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import Vimeo from '@u-wave/react-vimeo';

function Composer2(props) {



    return (
      <div style={{ 
        backgroundImage: `url(${image1})`,
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
      marginLeft: "10px",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Renzo Filinich</h1>
      </div>
     
      <h5 style={{
      marginLeft: "250px",
      positions: "absolute",
      opacity: "1.0",
      marginLeft: "10px",
      marginBottom: "-280px",
      height: "600px",
      widht: "200px",
      backgroundImage: `url(${image3})`,
      backgroundSize: "330px 300px",
      backgroundRepeat: "no-repeat",
       }}></h5>

      <iframe style={{
      position: "absolute",
      marginLeft: "38%",
      marginTop: "-27.5%",
      width: "45%",
      height: "23.27%",
      opacity: "1.0"
       }} src="https://player.vimeo.com/video/228832049" width= "600px" height="0px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>     
      <div>

    <iframe style={{
       position: "absolute",
       border: 0, 
       width: "250px", 
       height: "800px", 
       marginTop: "3%",
       marginLeft: "37%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3782459298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/album/7-ensayos-sobre-la-cosmovisi-n-andina">7 Ensayos sobre la Cosmovisión Andina by Renzo Filinich</a></iframe>    
      </div>
    <div>
    <iframe style={{
       position: "absolute",
       border: 0, 
       width: "250px", 
       height: "800px", 
       marginTop: "3%",
       marginLeft: "57.0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=4156088800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/esto-no-es-s-ntesis-es-s-ncresis">Esto no es Síntesis, es Síncresis! by Renzo Filinich</a></iframe>      
      </div>
      <div>
    <iframe style={{
       position: "absolute",
       border: 0, 
       width: "250px", 
       height: "800px",  
       marginTop: "3%",
       marginLeft: "77%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2117347669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/album/ondas-migratorias">Ondas Migratorias by Renzo Filinich</a></iframe>
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "34.5%",
      marginLeft: "37%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=1069000977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/a-tu-memoria">A tu Memoria by Renzo Filinich</a></iframe></div>
      <div>
      <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "34.5%",
      marginLeft: "57.0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=3761010274/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/metasistema-1-homenaje-a-roland-kayn">Metasistema 1- Homenaje a Roland Kayn by Renzo Filinich</a></iframe>    
      </div>
      <div>
       <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "34.5%",
      marginLeft: "77%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=1027233157/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/pulsares-para-piano-y-electronica">Pulsares para piano y electronica by Renzo Filinich</a></iframe>      </div>

    <div>
      <h5 style={{
      position: "absolute",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "80%",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "0.5%",
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
       }}> {"[Renzo Filinich Orozco (Lima 1978) Magister en Artes Mediales / Doctorando en Estudios Interdisciplinarios / Master in Media Arts / PhD in Interdisciplinary Studies"}<br></br><br></br>
        {"Mi interes surge en la investigacion y produccion con nuevas tecnologías en el arte, con el objetivo de desarrollar nuevos campos interactivos y cognitivos del espectador, así como la representación espacial del sonido y la imagen por medio del uso de interfaces gestuales de control y performance."}<br></br><br></br>
        {"En mi trabajo abordo distintos aspectos del lenguaje en el arte contemporaneo, como la instalacion, la performance y la improvisacion. Fui miembro y coordinador de la Comunidad Electroacustica de Chile CECh 2010 - 2018."}<br></br><br></br>
        {"A su ves, he mostrado mis obras e investigaciones en diversos Festivales y coloquios en: Austria, Portugal, Colombia, Argentina, Mexico, España, Inglaterra, Francia, Peru y Chile. Actualmente trabajo como docente e investigador de nuevos medios para Latinoamerica."}<br></br><br></br>
        {"My Interest arises in the research and production with new technologies in art, with the aim of developing new interactive and cognitive fields of the viewer, as well as the spatial representation of sound and image through the use of gestural control and performance interfaces."}<br></br><br></br>
        {"In my work I address different aspects of language in contemporary arts, such as installation, performance and improvisation. I was a member and coordinator of the Electro-acoustic Community of Chile CECh 2010 - 2018. In turn, I have shown my works and research in various festivals and colloquia in: Austria, Portugal, Colombia, Argentina, Mexico, Spain, England, France, Peru and Chile."}<br></br>
        {"I currently work as a teacher and researcher of new media for Latin America."}<br></br><br></br>
       </h5>
       </div>
       <br></br>

      <iframe style={{
      position: "absolute",    
      marginLeft: "40%",
      marginTop: "60%",
      width: "45%",
      height: "23.27%",
      opacity: "1.0"
       }} src="https://player.vimeo.com/video/399495243" width= "600px" height="0px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
     

    <div>
      <Link to='/compositores' style={{
               fontFamily: "'Raleway', sans-serif",
               color: "black",
               backgroundColor: "white",
               fontSize: "100%",
               fontWeight: "100",
               fontStyle: "normal",
               borderStyle: "solid",
               marginLeft: "2.5%",
               marginTop: "67%",
               paddingTop: "0px",
               borderWidth: "1px",
               position: "absolute",
               opacity: "1.0",
               width: "8.5%"}} activeStyle={{color: 'red'}}>  Compositores  </Link>   
    </div>   
    </div> 
    )
  }

  export default Composer2
