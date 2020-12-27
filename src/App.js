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
import "./App.css"



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
                <Link to="/home">Home</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/home" /> 
                    )
                }}
              />
               <Route exact path="/home" component={Home}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App
