import React from 'react';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Composers from '../components/Composers';
import Composer1 from '../components/Composer1';
import Composer2 from '../components/Composer2';
import QuienesSomos from '../components/QuienesSomos';
import Blog2 from '../components/Blog2';
import { HashRouter as Router, Route} from 'react-router-dom';
import { Switch} from 'react-router-dom';
import ForumContainer from "../containers/ForumContainer";
import Home from "../components/Home";
import MainFeaturedPost from './MainFeaturedPost';
import image1 from './foto-decolonial1.jpg';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',  
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
    div: {
      justifyContent: 'rigth',
    }
  }));

  const mainFeaturedPost = {
    title: 'Decolonial Records',
    color: 'inherit',
    image: image1,
    imgText: 'main image description',
  };
  



  const HeaderToolbar = () => {

    const classes = useStyles();


    return (
      <div>
       
      <Toolbar style={{
      fontSize: "30px",
      fontWeight: "100",
      fontStyle: "normal",
      marginLeft: "35%",
      marginTop: "35%",
      paddingTop: "0px",
      backgroundColor: "black",
      width: "65%",
      textWidth: "10px",
      opacity: "1.0", 
      justifyText: "left",
       }} component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link to='/quienessomos'>  Quienes Somos  </Link>
          <Link to='/compositores'>  Compositores  </Link>
          <Link to='/blog'>  Blog  </Link>
          <Link to='/forum'>  Forum  </Link>
        </Toolbar>
       
        </div>
  )
}

  
export default HeaderToolbar