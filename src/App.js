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
import QuienesSomos from './components/QuienesSomos';
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
      <div>
        <Router>
          <div>
            <ul>
              <li>
              <Link to='/'> Home</Link>
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
          <Route path='/quienessomos' component={QuienesSomos}/>
          <Route path='/compositores' component={Composers}/>
          <Route path='/blog' component={Blog2}/>
          <Route path='/forum' component= {ForumContainer}/>
          <Route path='/composer1' component = {Composer1}/>
          <Route path='/composer2' component = {Composer2}/>
        </Switch> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App
