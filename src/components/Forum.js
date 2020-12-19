import React from 'react'
import {Link} from 'react-router-dom'

const Forum = (props) => {

  return (
    <div>
      {props.themes.map(theme =>
        <li key={theme.id}>
          <Link to={`/forum/${theme.id}`}>{theme.name}</Link>

        </li> )}
        
        <br></br><br></br>
        <Link to='/'> Home</Link>

    </div>

  )
}

export default Forum