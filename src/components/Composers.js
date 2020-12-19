import React from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Composer1 from '../components/Composer1'
import Composer2 from '../components/Composer2'



class Composers extends React.Component {

  render() {
      return (
          <div>
            <Switch>
              <Link path='/composers/composer1' component ={Composer1}/>
              <Link path='/composers/composer2' component ={Composer2}/>
            </Switch>
          </div>
      )
  }
}

export default Composers