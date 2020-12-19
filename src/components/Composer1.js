import React from 'react'
import {Link} from 'react-router-dom'

class Composer1 extends Component {

render(){
  return (

    <div>
      <h2>
        Composer1
      </h2><br>
      This is information about composer1</br>
      <br>This is the spot for images of scores of the composer</br>
      <br>This is the spot for bandcamp links, audio, soundcloud links etc.</br>
      <br></br><br></br>
        <Link to='/'> Home</Link>
    </div>
  )


}
}

export default Composer1