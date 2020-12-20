import React from 'react';
import MainPageContainer from './containers/MainPageContainer'
import "./App.css"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Colectivo Simbiosis </h1>
        <MainPageContainer/>
      </div>
    );
  }
}


export default App;
