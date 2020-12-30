import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import image3 from './foto-simbiosis3.jpg';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(10),
    backgroundImage: image3,
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
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image3})` }}>
  
  <div>
        <h2>
          Pedro Franco Fraticelli
        </h2>
        <Typography variant="h5" color="inherit" paragraph>
              {"Yo soy Pedro Franco Fraticelli y soy un compositores bien chévere!"}<br></br>
              {"Soy un negrito sabrosón y me gusta el reggaetón."}<br></br>
              {"Me gusta la sandunga y la macumba y los lechones no"}<br></br>
              {"los aso porque a veces son bien chéveres también." }
            </Typography>   
            <Link to='/compositores'>  Compositores  </Link>
      </div>
      </Paper>

    )
  }
  
export default Composer2

/* <div>
        <h2>
          Composer2
        </h2><br></br>
        <h3>This is information about composer2</h3><br></br>
        <h3>Th    is is the spot for images of scores of the composer</h3><br></br>
        <h3>This is the spot for bandcamp links, audio, soundcloud links etc.</h3><br></br>
      </div> */