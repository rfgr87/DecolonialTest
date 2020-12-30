import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image4 from './foto-simbiosis4.jpg';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image4,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 700

  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30%'
  },
}));


function Composer2(props) {

  const classes = useStyles();
  const { post } = props;

    return (
    <Paper className={classes.mainFeaturedPost} 
    style={{ 
      backgroundImage: `url(${image4})`,
      height: 1000,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: `calc(100vw + 48px)`,
      margin: -24,
      padding: 24}}>
    <div>
      <h2>
        Elimar Alicia Chardón
      </h2>
      <Typography variant="h5" color="inherit" paragraph>
          {"Yo soy Elimar Alicia Chardón y soy una compositora y improvisadora bien demasiao!"}<br></br>
          {"Soy una gótica furiosa y machetera. Conmigo no se come cuento!"}<br></br>
          {"Por poco me como vivo a esos gringos lindos del FBI"}<br></br>
          {"Si no me hubieran sacao de ahi me hubiera quedao con ellos" }<br></br>
          {"Pa espetarles la barita por el fondillo mientras me tiran ojitos"}
      </Typography>   
      <Link to='/compositores'>  Compositores  </Link>
   
    </div>
    </Paper>
    )
  }
  
export default Composer2
