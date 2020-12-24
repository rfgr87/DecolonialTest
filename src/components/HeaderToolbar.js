import React from 'react';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

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



  const HeaderToolbar = () => {

    const classes = useStyles();


    return (

        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Link to='/quienessomos'>  Quienes Somos  </Link>
        <Link to='/compositores'>  Compositores  </Link>
        <Link to='/blog'>  Blog  </Link>
        <Link to='/forum'>  Forum  </Link>
        </Toolbar>      

    )
  }

  
export default HeaderToolbar