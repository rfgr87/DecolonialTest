import React from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Post from '../components/Post'


const Theme = (props) => {

  // ARREGLAR PARA PONER LO DE LOS MUSEOS

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  
  // use find instead of filter
  let theme = props.themes.filter(theme => theme.id == props.match.params.id)[0]

  return (

    <div>
      <h2>
        {theme ? theme.name : null}
      </h2><br>
      </br>
      {theme && <Post theme={theme}/>}
      <br></br><br></br>

        <Link to='/'> Home</Link>
    </div>
  )


}

export default Theme