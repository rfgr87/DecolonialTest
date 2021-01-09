import React from 'react'
import {Link} from 'react-router-dom'
import image1 from './foto-releases.jpg';
import image4 from './foto-aurora.jpg';
import image5 from './foto-aurora.jpg';
import image6 from './foto-bio.jpg';
import ReactPlayer from "react-player"

function Releases(props) {

  const { post } = props;

    return (
      <div style={{ 
      backgroundImage: `url(${image1})`,
      height: "120%",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "120%",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      paddingTop: 0,
      marginTop: -24,
      marginLeft: -24,
      }}>

    <div>
    <h5 style={{
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "50px",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "absolute",
      backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "5%",
      marginTop: "50px",
      width: "69%",
      padding: "10px",
       }}> 
       [Releases]<br></br></h5>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "20%", 
      height: "27%", 
      marginTop: "10%",
      marginLeft:  "12%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3766938795/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/atractores">Atractores by Diego Villaseñor de Cortina</a></iframe>    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "20%", 
      height: "27%", 
      marginTop: "10%",
      marginLeft:  "33%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2510828521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/paisajes-aumentados">Paisajes Aumentados by Felipe Corredor-Téllez</a></iframe>   </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "20%", 
      height: "27%", 
      marginTop: "10%",
      marginLeft: "54%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3937924049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/runa-taki">Runa Taki by Daniel Flores Días</a></iframe>      </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "20%", 
      height: "27%", 
      marginTop: "42%",
      marginLeft:  "12%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3799638859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/ya-llegu-a-yerbateros">Ya Llegué A Yerbateros by Hurdes</a></iframe>      
      </div>
      <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "20%", 
      height: "27%", 
      marginTop: "42%",
      marginLeft:  "33%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3918431720/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/7-ensayos-sobre-la-cosmovisi-n-andina">7 Ensayos Sobre La Cosmovisión Andina by Renzo Filinich</a></iframe>
    </div>
    <div>
    <iframe style={{
      position: "absolute",
      border: 0, 
      width: "20%", 
      height: "27%", 
      marginTop: "42%",
      marginLeft: "54%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2610809688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/axiomas-ind-genas">Axiomas Indígenas by Roy F Guzmán</a></iframe>    </div>

    <div>
    <iframe style={{
       position: "absolute",
       border: 0, 
       width: "20%", 
       height: "27%", 
       marginTop: "74%",
       marginLeft:  "12%"}} 
       src="https://bandcamp.com/EmbeddedPlayer/album=3007672718/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/06-01-21-improvisaci-n-con-cuatro-puertorrique-o">[06-01-21] Improvisación con Cuatro Puertorriqueño by Roy F Guzmán</a></iframe>
       </div>
   
    </div> 
    )
  }

  export default Releases
