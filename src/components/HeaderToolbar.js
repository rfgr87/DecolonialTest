import React from 'react';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Composers from '../components/Composers';
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import QuienesSomos from './Manifesto';
import Blog2 from '../components/Blog2';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Switch} from 'react-router-dom';
import ForumContainer from "../containers/ForumContainer";
import Home from "../components/Home";
import MainFeaturedPost from './MainFeaturedPost';
import image1 from './foto-decolonial1.jpg';

  const HeaderToolbar = () => {



    return (
      <div
        style={{marginTop: "0px"}}>
          <Link style={{color: "white", fontWeight: "100", background: "black", fontSize: "40px"}} to='/manifesto'>  Manifesto  </Link><br></br>
          <Link style={{color: "white", fontWeight: "100",  background: "black", fontSize: "40px"}} to='/compositores'>  Compositores  </Link><br></br>
          <Link style={{color: "white", fontWeight: "100",  background: "black", fontSize: "40px"}} to='/blog'>  Blog  </Link><br></br>
          <Link style={{color: "white", fontWeight: "100",  background: "black", fontSize: "40px"}} to='/forum'>  Foro  </Link><br></br>
          <Link style={{color: "white", fontWeight: "100",  background: "black", fontSize: "40px"}} to='/micelaneos'>  Miceláneos  </Link>

      </div>
  )
}

  
export default HeaderToolbar
