import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import image1 from './foto-decolonial1.jpg';
import image4 from './foto-pentagrama.jpg';
import image5 from './foto-simbiosis5.jpg';
import image6 from './foto-pieza-grafica1.jpg';
import image7 from './foto-pieza-grafica2.jpg';
import image8 from './foto-piezaguitarra3.jpg';
import image9 from './foto-piezacuarteto1.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Logo from './Logo';
import YouTube from 'react-youtube';

function Micelaneos(props) {

  const { post } = props;
  const opts1 = {
    position: "absolute",
    height: '195',
    width: '320',
    opacity: "0.0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const opts2 = {
    position: "absolute",

    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  

    return (
      <div style={{ 
        position: "absolute",
       backgroundColor: `cyan`,
      //  height: "4000px",
       backgroundSize: "100%",
       backgroundPosition: 'center',
       width: `100%`,
       paddingTop: "0px",
       margin: 0, 
       paddingLeft: 0,
       marginLeft: 0,
       height: "1500px",
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       width: "100%",
       margin: -24,
       padding: 24}}>
   <div style={{ 
     position: "relative",
    backgroundImage: `url(${image4})`,
    height: "1000px",
    backgroundSize: "100%",
    backgroundPosition: 'center',
    width: `800px`,
    marginTop: "100px",
    backgroundRepeat: "no-repeat",
    paddingLeft: -24,
    marginLeft: -40}}>
      <div style={{
      color:"black", 
      marginLeft: "805px",
      marginTop: "30%",
      paddingTop: "0px",
      opacity: "1.0", 
      justifyText: "rigth",
      position: "absolute"
 
       }} >
       <img src={image9}  width="650" height="800" border="3" ></img>
       </div>
       <div style={{
      color:"black", 
      marginLeft: "900px",
      marginTop: "1%",
      paddingTop: "0px",
      opacity: "1.0", 
      justifyText: "rigth",
      position: "absolute"

 
       }} >
       <img src={image6}  width="300" height="150" border="5" ></img>
       <img src={image7}  width="180" height="300" border="5"></img>

       </div>
  
       <div className="screen">

      <div 
             style={{
              color:"white",
              marginLeft: "20%",
              marginTop: "30%",
              paddingTop: "0px",
              width: "10%",
              textWidth: "5px",
              justifyText: "left",
              position: "absolute",
              opacity: "1.0"
               }}>

       <YouTube videoId="1cMfK_UFPPE" opts={opts2} />
       </div>
       <div style={{
      color:"white",
      marginLeft: "10%",
      marginTop: "17%",
      paddingTop: "0px",
      width: "10%",
      textWidth: "5px",
      justifyText: "left",
      position: "absolute",
      opacity: "1.0"
       }}> 
       <YouTube videoId="XO6nlItOFww" opts={opts1} />
  </div>
  </div>
  </div>
      </div>

    )
  }

  //onReady={this._onReady} 
  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  
export default Micelaneos

