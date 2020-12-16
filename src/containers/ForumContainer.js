import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'
import {fetchReviews} from '../actions/fetchReviews'
import ReviewNavBar from '../components/ReviewNavBar'
import Review from '../components/Review'

//import rootReducers from '../reducers/rootReducers'
import reviewReducer from '../reducers/reviewReducer'
import museumReducer from '../reducers/museumReducer'


class ForumContainer extends React.Component {

state = {}
  
componentDidMount() {
    this.props.fetchThemes()
    }

  render() {
    return (
      <div>
          <Themes path='/themes' render={(routerProps) => <Themes {...routerProps} themes={this.props.themes}/>}/>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.themeReducer.themes
  }
}

export default connect(mapStateToProps, {fetchThemes})(ForumContainer)