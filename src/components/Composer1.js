import React from 'react'
import {Link} from 'react-router-dom'
import image3 from './foto-piezaroy1.jpg';
import image4 from './foto-aurora.jpg';
import image5 from './foto-aurora.jpg';
import image6 from './foto-bio.jpg';
import ReactPlayer from "react-player"

function Composer1(props) {

  const { post } = props;

    return (
      <div style={{ 
      backgroundImage: `url(${image3})`,
      height: "200%",
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
      position: 'relative',
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "10px",
      marginLeft: "250px",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Roy F Guzmán</h1>
      </div>
     
      <div style={{
      marginLeft: "250px",
      positions: "absolute",
      opacity: "1.0",
      marginLeft: "250px",
      marginBottom: "-280px",
      height: "500px",
      widht: "200px",
      backgroundImage: `url(${image6})`,
      backgroundSize: "280px 200px",
      backgroundRepeat: "no-repeat",
       }}></div>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "550px",
      marginTop: "-200px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="20%"
            height="50%"
        url="https://soundcloud.com/royguzman/s_t2"
       ></ReactPlayer>
      
      </div>
      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "1050px",
      marginTop: "-200px",
      paddingTop: "0px",
      width: "100%",
      textWidth: "10px",
      justifyText: "left",
      opacity: "1.0"
       }}>
      <ReactPlayer width="20%"
            height="50%"
        url="https://soundcloud.com/royguzman/axiomas-indigenas"
       ></ReactPlayer>
      
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "65px",
      marginLeft: "750px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=97623958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-28-12-20">sin-título[28-12-20] by Roy F Guzmán</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "65px",
      marginLeft: "1000px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1694358983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/m">[M] by Roy F Guzman</a></iframe>    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px",  
      marginTop: "65px",
      marginLeft: "1250px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-título[10-4-20][3] by Roy F Guzmán</a></iframe>    
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "465px",
      marginLeft: "750px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>
      </div>
      <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "465px",
      marginLeft: "1250px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1768060898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/x-05-x-08-x-2005-265">x = 0.5+x*(-0.8)*(x/[2.005..2.65]) by Roy F Guzmán</a></iframe>      

    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "465px",
      marginLeft: "1000px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4291500311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/axiom-tica-j-bara-para-cuarteto-de-cuerdas">Axiomática Jíbara para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>    
    </div>

    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "865px",
      marginLeft: "750px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1983507765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/congas">congas by Roy F Guzmán</a></iframe>      
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "865px",
      marginLeft: "1000px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2664903003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/tito-2">Tito by Roy F Guzman</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "865px",
      marginLeft: "1250px"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=836594118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-25-12-20-1">sin-título[25-12-20][1] by Roy F Guzmán</a></iframe>    </div>
    
   
    
      
    <div>
      <h5 style={{
      position: "relative",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "15px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "250px",
      marginTop: "0",
      border: "black",
      borderWidth: "3px",
      borderStyle: "outset",
      padding: "25px",
      backgroundColor: "white",
      width: "15%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0"
       }}> {"Roy F Guzmán - Compositor de música electrónica algorítmica e instrumental, improvisador y poeta nacido en San Juan, Puerto Rico el 28 de junio de 1987.]"}<br></br><br></br> 
       {"Sus temas de investigaciones previas y actuales son la teoría del caos para material estructural musical, el tema de “abstracciones” trabajado mediante partituras sonoras con instrumentos utilizándolas como una metáfora de la percepción de toda la realidad, “Música a Lo Pobre” que incluye el tema de la resiliencia, la estética que produce las limitaciones auténticas de los sistemas como universal abstracta del folklor, la no dualidad, el concepto de axiomas de objetos conceptuales y físicos, geometrías abstractas en formas musicales, el estudio y formalización de la lectura de partituras no tradicionales, la expansión de la parametrización y constructos musicales, la investigación del concepto de Formas Sonoras Sólidas/Static Sound Forms donde crea técnicas para producir la ilusión de un sólido en un medio temporal con el programa El Cubo De Chuito para manipulación de audio en 3 dimensiones y la creación de música conceptual basada en teorías sobre la espiritualidad abstracta indígena Taina."}<br></br><br></br>
       {"Recientemente explora la Meta Composición donde se propone que la abstracción perceptual llamada realidad se ve afectada por las estructuras objetuales, constructos nuevos, formas, símbolos y textos composicionales."}<br></br><br></br> 
       {"Creó la Poesía Concreta Multi Semiótica donde se explora el multi semiotismo sincrónico y asincrónico y la Meta Poesía Integral donde se explora el color semiótico como una integral de un multisemiotismo de una gestalt universal popular. También investiga y crea deducciones y creaciones sobre la metafísica de la espiritualidad ancestral latinoamericana y su potencial desarrollo axiomático y abstracto para la creación de nuevos constructos y filosofías que tienen el potencial de alterar la realidad perceptual."}
       </h5>
       </div>
       <br></br>

      <iframe style={{
      position: "absolute",
      marginLeft: "750px",
      marginTop: "150px"
       }} width="360" height="215" src="https://www.youtube.com/embed/XO6nlItOFww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe style={{
      position: "absolute",
      marginLeft: "1120px",
      marginTop: "150px"
       }} width="360" height="215" src="https://www.youtube.com/embed/C0Thg24vmag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe style={{
      position: "absolute",
      marginLeft: "750px",
      marginTop: "400px"
       }} width="460" height="315" src="https://www.youtube.com/embed/lZIuDlVJYQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <div>
      <Link to='/compositores' style={{
              fontFamily: "'Raleway', sans-serif",
              color: "black",
              backgroundColor: "white",
              fontSize: "20px",
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
