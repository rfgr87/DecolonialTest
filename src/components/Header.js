import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Composers from '../components/Composers';
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import Manifesto from './Manifesto';
import { HashRouter as Router, Route} from 'react-router-dom';
import Blog2 from '../components/Blog2'
import ForumContainer from '../containers/ForumContainer'
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from '../components/NavBar'
import { CenterFocusStrong } from '@material-ui/icons';
import { Switch} from 'react-router-dom';
import HeaderToolbar from '../components/HeaderToolbar';
import MainFeaturedPost from './MainFeaturedPost';
import image1 from './foto-decolonial1.jpg';
import image5 from './foto-simbiosis5.jpg';




export default function Header(props) {


  return (
  
    <React.Fragment>
      <Toolbar>
        <Typography style={{
          fontFamily: "Menlo",
          fontWeight: '700',
          lineHeight: "100%",
          position: "absolute",
          padding: "10px",
          marginLeft: "1%",
          width: "92%",
          fontSize: "100px", 
          marginTop: "10%", 
          backgroundImage: `url(${image1})`,          
          color: "black"}}>
          {"Decolonial Records"}
        </Typography>
     
      </Toolbar>
      <HeaderToolbar>
      </HeaderToolbar>  
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};