import React from 'react'
import {Route, Switch} from 'react-router-dom'
import QuienesSomos from '../components/QuienesSomos'
import Blog from '../components/Blog'
import ForumContainer from '../components/ForumContainer'
import NavBar from '../components/NavBar'
import Composer1 from '../components/Composer1'
import Composer2 from '../components/Composer2'


class MainPageContainer extends React.Component {

  render() {
      return (
          <div>
            <NavBar/>
            <Switch>
              <Route path='/quienessomos' component={QuienesSomos}/>
              <Route path='/composers' render={(routerProps) => <Composers {...routerProps} composers={this.props.composers}/>}/>
              <Route path='/composers/composer1' component = {Composer1}/>
              <Route path='/composers/composer2' component = {Composer2}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/forum' component={ForumContainer}/>
            </Switch>
          </div>
      )
  }
}

export default MainPageContainer