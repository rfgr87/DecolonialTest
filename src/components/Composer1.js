import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image3 from './foto-piezaroy1.jpg';
import image4 from './foto-aurora.jpg';
import image5 from './foto-aurora.jpg';
import image6 from './foto-bio.jpg';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player"


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'absolute',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image3,
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
      backgroundImage: `url(${image3})`,
      height: "4500",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "2350px",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      paddingTop: 24,
      marginTop: -24,
      marginLeft: -230,
      }}>
    <div>
     <h1 style={{
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "50px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      marginLeft: "250px",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Roy F Guzmán</h1>
      </div>
     
      <h5 style={{
      marginLeft: "250px",
      positions: "absolute",
      opacity: "1.0",
      marginLeft: "250px",
      marginBottom: "-280px",
      height: "680px",
      widht: "380px",
      backgroundImage: `url(${image6})`,
      backgroundSize: "580px 380px",
      backgroundRepeat: "no-repeat",
       }}></h5>

      <div
      style={{
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
      <ReactPlayer style = {{width: "200px"
       }}
        url="https://soundcloud.com/royguzman"
       ></ReactPlayer>
      
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "60px",
      marginLeft: "1050px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=97623958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-28-12-20">sin-título[28-12-20] by Roy F Guzmán</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "60px",
      marginLeft: "1400px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=284206038/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/revoluces-2-1-21-1">revoluces[2-1-21][1] by Roy F Guzmán</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "530px",
      marginLeft: "1400px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "350px", 
      height: "470px", 
      marginTop: "530px",
      marginLeft: "1050px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4291500311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/axiom-tica-j-bara-para-cuarteto-de-cuerdas">Axiomática Jíbara para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>    
      </div>
    <div>
      <h5 style={{
      position: "relative",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "25px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "250px",
      marginTop: "0",
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
       }}> {"[Compositor de música electrónica algorítmica e instrumental, improvisador y poeta nacido en San Juan, Puerto Rico el 28 de junio de 1987.]"}<br></br><br></br> 
       {"Sus temas de investigaciones previas y actuales son la teoría del caos para material estructural musical, el tema de “abstracciones” trabajado mediante partituras sonoras con instrumentos utilizándolas como una metáfora de la percepción de toda la realidad, “Música a Lo Pobre” que incluye el tema de la resiliencia, la estética que produce las limitaciones auténticas de los sistemas como universal abstracta del folklor, la no dualidad, el concepto de axiomas de objetos conceptuales y físicos, geometrías abstractas en formas musicales, el estudio y formalización de la lectura de partituras no tradicionales y la expansión de la parametrización y constructos musicales.]"}<br></br><br></br>
       {"Recientemente explora la Meta Composición donde se propone que la abstracción perceptual llamada realidad se ve afectada por las estructuras objetuales, constructos nuevos, formas, símbolos y textos composicionales.]"}<br></br><br></br> 
       {"Creó la Poesía Concreta Multi Semiótica donde se explora el multi semiotismo sincrónico y asincrónico y la Meta Poesía Integral donde se explora el color semiótico como una integral de un multisemiotismo de una gestalt universal popular. También investiga y crea deducciones y creaciones sobre la metafísica de la espiritualidad ancestral latinoamericana y su potencial desarrollo axiomático y abstracto para la creación de nuevos constructos y filosofías que tienen el potencial de alterar la realidad perceptual.]"}
       </h5>
       </div>
       <br></br>
      
    <div>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "80px",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              marginLeft: "250px",

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
