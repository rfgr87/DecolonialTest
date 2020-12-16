import React from 'react'
import {connect} from 'react-redux'
import {addTheme} from '../actions/addTheme'

class ThemeInput extends React.Component {

  state = {
    theme: ''
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTheme({theme: this.state})
    this.setState({
      theme: ''
    })
    window.location.reload(false)
  }

render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Theme:</label>
          <input type="text" name="theme" value={this.state.theme} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  } 
}


export default connect(null, {addTheme})(ThemeInput)