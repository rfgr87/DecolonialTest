import React from 'react';
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
import image5 from './foto-simbiosis5.jpg';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Logo from '../components/Logo';


export default function Home() {

  return (
   <div
    style={{ 
      position: "absolute",
      backgroundImage: `url(${image1})`,
      height: "180%",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `100%`,
      marginTop: -24,
      paddingTop: 24
     }}>
    <React.Fragment>     
      <CssBaseline />
      <Container >
      
    
      <Header />        
        <main>
        
     
        </main>
      </Container>
    </React.Fragment>
    </div>
  );
}
