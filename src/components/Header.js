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
import QuienesSomos from '../components/QuienesSomos';
import { HashRouter as Router, Route} from 'react-router-dom';
import Blog2 from '../components/Blog2'
import ForumContainer from '../containers/ForumContainer'
import HeaderContainer from '../components/HeaderContainer'
import Toolbar from '@material-ui/core/Toolbar';
import NavBar from '../components/NavBar'
import { CenterFocusStrong } from '@material-ui/icons';
import { Switch} from 'react-router-dom'
import HeaderToolbar from '../components/HeaderToolbar'



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
    justifyContent: 'center'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
  
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}>
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <HeaderToolbar></HeaderToolbar>
        <Switch>
        <Route exact path='/quienessomos'> <QuienesSomos/></Route>
        <Route exact path='/compositores'> <Composers/></Route>
        <Route exact path='/composer1'> <Composer1/></Route>
        <Route exact path='/composer2'> <Composer2/></Route>
        <Route exact path='/blog'> <Blog2/></Route>
        <Route exact path='/forum'> <ForumContainer/></Route>
        </Switch>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};