import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Composers from './components/Composers';
import Composer1 from './components/Composer1';
import Composer2 from './components/Composer2';
import Composer3 from './components/Composer3';
import Manifesto from './components/Manifesto';
import Blog2 from './components/Blog2';
import ForumContainer from "./containers/ForumContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div
        style={{
        color:"white", 
        fontFamily: "'Raleway', sans-serif",
        fontWeight: "100",
        fontStyle: "normal",
        paddingTop: "8px",
        positions: "relative",
        backgroundColor: "#000000",
        opacity: "1.0",
       }}> 
        <Router>
          <div>
            <ul>
              <li>
              <Link 
              style={{
                color:"white",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "200px",
                fontSize: "20px"
                }}to='/'> Home</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/home"/> 
                    )
                }}
              />
          <Route exact path="/home" component={Home}/>
          <Route path='/manifesto' component={Manifesto}/>
          <Route path='/compositores' component={Composers}/>
          <Route path='/blog' component={Blog2}/>
          <Route path='/forum' component= {ForumContainer}/>
          <Route path='/composer1' component = {Composer1}/>
          <Route path='/composer2' component = {Composer2}/>
          <Route path='/composer3' component = {Composer3}/>

        </Switch> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App
