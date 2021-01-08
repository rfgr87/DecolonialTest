import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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


const mainFeaturedPost = {
  title: 'Decolonial Records',
  image: image1,
  imgText: 'main image description',
};


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'start',
    overflowX: 'auto',

  },
  toolbarLink: {
    padding: 0,
    flexShrink: 0,
  },
  div: {
    justifyContent: 'rigth'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
  
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
        <Button style={{ position: "absolute", marginLeft: "5%",  color: "black", background: "white", fontSize: "15px", opacity: "1.0", marginTop: "0px" }}>Subscribe</Button>
        <Typography style={{
          position: "absolute",
          padding: "10px",
          marginLeft: "25%",
          width: "580px", color:"black", fontSize: "60px", marginTop: "200px", background: "black", color: "white"}}>
          {"Decolonial Records"}
        </Typography>
        <IconButton>
          <SearchIcon style={{ marginLeft: "75%", position: "absolute", color: "black", background: "white", fontSize: "35px", opacity: "1.0" }} />
        </IconButton>
        <Button style={{ marginLeft: "85%", color: "black", background: "white", fontSize: "15px", opacity: "1.0" }} >
          Sign up
        </Button>
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