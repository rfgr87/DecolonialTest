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
      height: "100%",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "150%",
      paddingBottom: "80%",  
      paddingTop: 24,
      marginTop: -24,
      marginLeft:"-16%"
      }}>
    <div>
     <h1 style={{
      position: 'relative',
      color:"black", 
      fontFamily: "'Raleway', sans-serif",
      fontSize: "175%",
      fontWeight: "100",
      fontStyle: "normal",
      paddingTop: "0%",
      marginLeft: "12.5%",
      backgroundColor: "#6666FF",
      width: "50%",
      textWidth: "1px"
       }}>Roy F Guzmán</h1>
      </div>
     
      <h5 style={{
      marginLeft: "10%",
      position: "absolute",
      opacity: "1.0",
      marginLeft: "12.5%",
      marginBottom: "0",
      height: "35%",
      width: "45%",
      backgroundImage: `url(${image6})`,
      backgroundSize: "45% 45%",
      backgroundRepeat: "no-repeat",
       }}></h5>

      <div
      style={{
      position: "absolute",
      color:"white", 
      marginLeft: "35%",
      marginTop: "5%",
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
      marginLeft: "56%",
      marginTop: "5%",
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
      marginTop: "15%",
      marginLeft: "37%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=97623958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-28-12-20">sin-título[28-12-20] by Roy F Guzmán</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "15%",
      marginLeft: "51%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1694358983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/m">[M] by Roy F Guzman</a></iframe>    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px",  
      marginTop: "15%",
      marginLeft: "65%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-título[10-4-20][3] by Roy F Guzmán</a></iframe>    
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "37%",
      marginLeft: "37%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>
      </div>
      <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "37%",
      marginLeft: "51%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1768060898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/x-05-x-08-x-2005-265">x = 0.5+x*(-0.8)*(x/[2.005..2.65]) by Roy F Guzmán</a></iframe>      

    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "37%",
      marginLeft: "65%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4291500311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/axiom-tica-j-bara-para-cuarteto-de-cuerdas">Axiomática Jíbara para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>    
    </div>

    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "59%",
      marginLeft: "37%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1983507765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/congas">congas by Roy F Guzmán</a></iframe>      
      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "59%",
      marginLeft: "51%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2664903003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/tito-2">Tito by Roy F Guzman</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "250px", 
      height: "800px", 
      marginTop: "59%",
      marginLeft: "65%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=836594118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-25-12-20-1">sin-título[25-12-20][1] by Roy F Guzmán</a></iframe>    </div>
       
    <div>
      <h5 style={{
      position: "absolute",
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "80%",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "12.5%",
      marginTop: "17%",
      border: "black",
      borderWidth: "3px",
      borderStyle: "outset",
      padding: "25px",
      backgroundColor: "white",
      width: "20%",
      textWidth: "10px",
      opacity: "0.7", 
      justifyText: "left",
      opacity: "1.0"
       }}> {"Roy F Guzmán - Compositor de música electrónica algorítmica e instrumental, improvisador y poeta nacido en San Juan, Puerto Rico el 28 de junio de 1987.]"}<br></br><br></br> 
       {"Sus temas de investigaciones previas y actuales son la teoría del caos para material estructural musical, el tema de “abstracciones” trabajado mediante partituras sonoras con instrumentos utilizándolas como una metáfora de la percepción de toda la realidad, “Música a Lo Pobre” que incluye el tema de la resiliencia, la estética que produce las limitaciones auténticas de los sistemas como universal abstracta del folklor, la no dualidad, el concepto de axiomas de objetos conceptuales y físicos, geometrías abstractas en formas musicales, el estudio y formalización de la lectura de partituras no tradicionales, la expansión de la parametrización y constructos musicales, la investigación del concepto de Formas Sonoras Plásticas donde crea técnicas para producir la ilusión de un sólido en un medio temporal con el programa El Cubo De Chuito para manipulación de audio en 3 dimensiones y la creación de música conceptual basada en teorías sobre la espiritualidad abstracta indígena Taina."}<br></br><br></br>
       {"Recientemente explora la Meta Composición donde se propone que la abstracción perceptual llamada realidad se ve afectada por las estructuras objetuales, constructos nuevos, formas, símbolos y textos composicionales."}<br></br><br></br> 
       {"Creó la Poesía Concreta Multi Semiótica donde se explora el multi semiotismo sincrónico y asincrónico y la Meta Poesía Integral donde se explora el color semiótico como una integral de un multisemiotismo de una gestalt universal popular. También investiga y crea deducciones y creaciones sobre la metafísica de la espiritualidad ancestral latinoamericana y su potencial desarrollo axiomático y abstracto para la creación de nuevos constructos y filosofías que tienen el potencial de alterar la realidad perceptual."}
       </h5>
       </div>
       <br></br>

      <iframe style={{
      position: "absolute",
      marginLeft: "37%",
      marginTop: "80%"
       }} width="20%" height="15%" src="https://www.youtube.com/embed/XO6nlItOFww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe style={{
      position: "absolute",
      marginLeft: "58.0%",
      marginTop: "80%"
       }} width="20%" height="15%" src="https://www.youtube.com/embed/C0Thg24vmag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <iframe style={{
      position: "absolute",
      marginLeft: "750px",
      marginTop: "95%"
       }} width="20%" height="15%" src="https://www.youtube.com/embed/lZIuDlVJYQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div>
    <Link to='/compositores' style={{
        fontFamily: "'Raleway', sans-serif",
        color: "black",
        backgroundColor: "white",
        fontSize: "100%",
        fontWeight: "100",
        fontStyle: "normal",
        borderStyle: "solid",
        marginLeft: "12.5%",
        marginTop: "68%",
        paddingTop: "0px",
        borderWidth: "1px",
        position: "absolute",
        opacity: "1.0",
        width: "7%"}} activeStyle={{color: 'red'}}>  Compositores  </Link>   
    </div>   
    </div> 
    )
  }

  export default Composer1
