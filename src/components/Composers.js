import React from 'react'
import {Link} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Composer1 from '../components/Composer1'
import Composer2 from '../components/Composer2'



const Composers = () => {

 
      return (

        <ul>
        <Link to={'/compositores/composer1'}>Composer1</Link><br></br>      
        <Link to={'/compositores/composer2'}>Composer2</Link>

     
            <Switch>
              <Route path='/compositores/composer1' component = {Composer1}/>
              <Route path='/compositores/composer2' component = {Composer2}/>
            </Switch>

        </ul>
      )
  }


export default Composers