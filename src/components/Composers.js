import React from 'react'
import {Link} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Composer1 from '../components/Composer1'
import Composer2 from '../components/Composer2'



const Composers = () => {

 
      return (

        <ul>
        <Link to={'/composer1'}>Composer1</Link><br></br>      
        <Link to={'/composer2'}>Composer2</Link>

     
            
              <Route path='/composer1' component = {Composer1}/>
              <Route path='/composer2' component = {Composer2}/>
            

        </ul>
      )
  }


export default Composers