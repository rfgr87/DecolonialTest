import React from 'react'
import {Route, Switch} from 'react-router-dom'
import QuienesSomos from './QuienesSomos'
import Blog2 from './Blog2'
import Composers from './Composers'
import Composer1 from './Composer1'
import Composer2 from './Composer2'
import ForumContainer from '../containers/ForumContainer'
import {Link} from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar';





class HeaderContainer extends React.Component {


  

  render() {
      return (
        <div>
        <Link to='/quienessomos'>  Quienes Somos  </Link>
        <Link to='/compositores'>  Compositores  </Link>
        <Link to='/blog'>  Blog </Link>
        <Link to='/foro'>  Foro </Link>
            <Switch>
              <Route path='/quienessomos' component={QuienesSomos}/>
              <Route path='/compositores' render={(routerProps) => <Composers {...routerProps} composers={this.props.composers}/>}/>
              <Route path='/composer1' component = {Composer1}/>
              <Route path='/composer2' component = {Composer2}/>
              <Route path='/blog' component={Blog2}/>
              <Route path='/forum' component={ForumContainer}/>
            </Switch>
         </div>
      )
  }
}

  export default HeaderContainer