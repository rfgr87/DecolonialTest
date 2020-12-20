import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import QuienesSomos from '../components/QuienesSomos'
import Blog from '../components/Blog'
import NavBar from '../components/NavBar'
import Composers from '../components/Composers'
import Composer1 from '../components/Composer1'
import Composer2 from '../components/Composer2'
import {fetchThemes} from '../actions/fetchThemes'
import ForumContainer from '../containers/ForumContainer'
import themeReducer from '../reducers/themeReducer'
import {Link} from 'react-router-dom'
import ScriptTag from 'react-script-tag';
import interval2 from '../indexDynamic.js'

class MainPageContainer extends React.Component {

state = {}

  componentDidMount() {
    this.props.fetchThemes()
  }
  

  render() {
      return (
        <div>
        <Link to='/quienessomos'>  Quienes Somos  </Link>
        <Link to='/compositores'>  Compositores  </Link>
        <Link to='/blog'>  Blog  </Link>
        <Link to='/forum'>  Forum  </Link>
     
            <Switch>
              <Route path='/quienessomos' component={QuienesSomos}/>
              <Route path='/compositores' render={(routerProps) => <Composers {...routerProps} composers={this.props.composers}/>}/>
              <Route path='/composer1' component = {Composer1}/>
              <Route path='/composer2' component = {Composer2}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/forum' component={ForumContainer}/>
            </Switch>
          </div>
      )
  }
}

const styles = {
  title: {
      fontSize: 48,
  }
}

const mapStateToProps = state => {
    return {
      themes: state.themeReducer.themes
    }
  }
  
  export default connect(mapStateToProps, {fetchThemes})(MainPageContainer)