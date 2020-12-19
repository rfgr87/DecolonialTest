import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Components {

render(){
  return (
    <div>
      <Link to='/quienessomos'> Quienes Somos  </Link>
      <Link to='/composers'> Compositores</Link>
      <Link to='/blog'> Blog</Link>
      <Link to='/forum'> Forum</Link>
    </div>
  )
}
}

export default NavBar