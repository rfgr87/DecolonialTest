import React from 'react'
import {Link} from 'react-router-dom'


const Themes = (props) => {

  return (
    <div>
      {props.themes.map(theme =>
        <li key={theme.id}>
          <Link to={`/themes/${theme.id}`}>{theme.name}</Link>

        </li> )}
        
        <br></br><br></br>
        <Link to='/'> Home</Link>

    </div>

  )
}

export default Themes