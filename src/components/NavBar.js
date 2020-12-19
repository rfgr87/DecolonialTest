import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/quienessomos'> Quienes Somos  </Link><br></br>
      <Link to='/compositores'> Compositores</Link><br></br>
      <Link to='/blog'> Blog</Link><br></br>
      <Link to='/forum'> Forum</Link><br></br>
    </div>
  )
}


export default NavBar