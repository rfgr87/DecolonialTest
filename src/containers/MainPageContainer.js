import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchMuseums} from '../actions/fetchMuseums'
import QuienesSomos from '../components/QuienesSomos'
import Museum from '../components/Museum'
import MuseumInput from '../components/MuseumInput'
import NavBar from '../components/NavBar'
import LikeButton from '../components/LikeButton'

import App from '../App'

class MainPageContainer extends React.Component {

  state = {}

  componentDidMount() {
    this.props.fetchComposers()
  }

  render() {
      return (
          <div>
            <NavBar/>
            <Switch>
              <Route path='/museums/quienessomos' component={QuienesSomos}/>
              <Route path='/composers' render={(routerProps) => <Composers {...routerProps} composers={this.props.composers}/>}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/forum' component={ForumContainer}/>
            </Switch>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    museums: state.museumReducer.museums
  }
}

export default connect(mapStateToProps, {fetchMuseums})(MuseumContainer)