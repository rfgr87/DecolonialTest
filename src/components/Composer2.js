import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image1 from './foto-renzo1.jpg';
import image2 from './foto-renzo2.jpg';
import image3 from './foto-renzo3.jpg';
import image4 from './foto-renzo4.jpg';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import Vimeo from '@u-wave/react-vimeo';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'absolute',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image1,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 1000

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

function Composer1(props) {

  const classes = useStyles();
  const { post } = props;

    return (
      <div style={{ 
      backgroundImage: `url(${image1})`,
      height: "4500",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      paddingTop: 24,
      marginTop: -24,
      marginLeft: 0,
      paddingLeft: "10px",
      }}>
    <div>
     <h1 style={{
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "50px",
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
      marginBottom: "-50px",
      height: "440px",
      widht: "380px",
      backgroundImage: `url(${image3})`,
      backgroundSize: "440px 380px",
      backgroundRepeat: "no-repeat",
       }}></h5>

      <div style={{
      position: "absolute",
      color:"white", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "1000px",
      marginTop: "-390px",
      paddingTop: "0px",
      backgroundColor: "black",
      width: "100px",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <Vimeo video="228832049"/>
      </div>
      <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "60px",
      marginLeft: "1050px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3782459298/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/album/7-ensayos-sobre-la-cosmovisi-n-andina">7 Ensayos sobre la Cosmovisión Andina by Renzo Filinich</a></iframe>    
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "60px",
      marginLeft: "1400px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=4156088800/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/esto-no-es-s-ntesis-es-s-ncresis">Esto no es Síntesis, es Síncresis! by Renzo Filinich</a></iframe>      
      </div>
      <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "530px",
      marginLeft: "1400px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2117347669/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/album/ondas-migratorias">Ondas Migratorias by Renzo Filinich</a></iframe>
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "530px",
      marginLeft: "1050px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/track=1069000977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://renzofilinich.bandcamp.com/track/a-tu-memoria">A tu Memoria by Renzo Filinich</a></iframe>      </div>
    <div>
      <h5 style={{
      position: "relative",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "25px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "10px",
      marginTop: "0",
      border: "blue",
      borderWidth: "1px",
      borderStyle: "outset",
      padding: "25px",
      backgroundColor: "white",
      width: "40%",
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
      marginLeft: "950px",
      marginTop: "-700px",
      paddingTop: "0px",
      widht: "1400px",
      height: "1400px",
      opacity: "1.0"
       }} src="https://player.vimeo.com/video/399495243" width= "980" height="700" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
     

    <div>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "80px",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              marginLeft: "10px",

              paddingTop: "0px",
              borderWidth: "1px",
              positions: "absolute",
              opacity: "1.0",
              width: "75%", 
              marginBottom: "100px"}} activeStyle={{color: 'red'}}>  Compositores  </Link>   
    </div>   
    </div> 
    )
  }

  export default Composer1
