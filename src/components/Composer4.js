import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image1 from './foto-felipe1.png';
import image2 from './foto-felipe2.jpg';
import image3 from './foto-felipe3.jpg';
import image4 from './foto-felipe4.jpg';
import image5 from './foto-felipe5.jpg';
import image6 from './foto-felipe6.jpg';
import image7 from './foto-felipe7.jpg';
import image8 from './foto-diego8.png';
import image9 from './foto-diego9.png';
import image10 from './foto-diego10.png';
import image11 from './foto-diego11.png';
import image12 from './foto-diego12.png';
import image13 from './foto-diego13.png';
import image14 from './foto-diego14.png';
import image15 from './foto-diego15.png';
import image16 from './foto-diego16.png';
import image17 from './foto-diego17.png';
import image18 from './foto-diego18.png';
import image19 from './foto-diego19.jpg';
import image20 from './foto-diego20.png';
import image21 from './foto-diego21.png';
import image22 from './foto-diego22.png';
import image23 from './foto-diego23.png';
import image24 from './foto-diego24.png';
import image25 from './foto-diego25.png';
import image26 from './foto-diego26.png';
import image27 from './foto-diego27.png';
import image28 from './foto-diego28.png';
import image29 from './foto-diego29.jpg';
import image30 from './foto-diego30.png';
import image31 from './foto-diego31.png';





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
    height: 800

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

function Composer4(props) {

  const classes = useStyles();
  const { post } = props;

    return (
      <div style={{ 
      backgroundImage: `url(${image1})`,
      height: "100%",
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
       }}>Felipe Corredor Tréllez</h1>
      </div>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "60px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/felipecorredortellez/paso-en-el-litoral-pacifico"
       ></ReactPlayer>
      
      </div>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "220px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/felipecorredortellez/la-vuelta-andina"
       ></ReactPlayer>      
      </div>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "380px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/felipecorredortellez/el-tao-joropero-piano"
       ></ReactPlayer>      
      </div>


      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "540px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/felipecorredortellez/el-tao-joropero-percu-version"
       ></ReactPlayer>      
      </div>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "700px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/felipecorredortellez/lamento-del-ganao"
       ></ReactPlayer>      
      </div>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "860px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="40%"
            height="70%"
        url="https://soundcloud.com/felipecorredortellez/morena-de-negros-cabellos"
       ></ReactPlayer>      
      </div>
     
      <h5 style={{
      marginLeft: "250px",
      positions: "absolute",
      opacity: "1.0",
      marginLeft: "10px",
      marginBottom: "-300px",
      height: "620px",
      widht: "400px",
      backgroundImage: `url(${image7})`,
      backgroundSize: "400px 300px",
      backgroundRepeat: "no-repeat",
       }}></h5>

      <div>
      <h5 style={{
      position: "relative",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "15px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "10px",
      marginTop: "0",
      border: "black",
      borderWidth: "3px",
      borderStyle: "outset",
      padding: "25px",
      backgroundColor: "white",
      width: "32%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0"
       }}> {"Felipe Corredor-Téllez (1988)"}<br></br><br></br>
       {"Compositor, arreglista y artista sonoro egresado del programa de arte musicales con énfasis en composición y arreglos de la Facultad de Artes ASAB de la Universidad Distrital Francisco José de Caldas en Bogotá y Magister en composición de la Universidad EAFIT en Medellín."}<br></br><br></br> 
       {"Algunas de sus composiciones son una reflexión sobre las múltiples maneras de combinar lenguajes musicales colombianos de tradición popular con estéticas compositivas de tipo académico. Sus obras abarcan formatos solistas, duetos, pequeños ensambles con y sin soporte fijo y ha explorado también el tratamiento sonoro multicanal y la instalación sonora."}<br></br><br></br>
       {"Ha publicado dos artículos académicos que relatan su experiencia como compositor e investigador y abordan con detalle sus obras y una memoria sobre una ponencia de estéticas del análisis musical, tomando como ejemplo también su música."}<br></br><br></br>
         </h5>
       </div>
       <br></br>   
      
    <div>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "20px",
              fontWeight: "100",
              fontStyle: "normal",
              borderStyle: "solid",
              marginLeft: "10px",

              paddingTop: "0px",
              borderWidth: "1px",
              position: "absolute",
              opacity: "1.0",
              width: "10.5%", 
              marginBottom: "100px"}} activeStyle={{color: 'red'}}>  Compositores  </Link>   
    </div>   
   
    </div> 
    )
  }

  export default Composer4
