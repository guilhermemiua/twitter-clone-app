import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Login from "./components/Login/Login";
import Timeline from "./components/Timeline/Timeline";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/timeline" component={Timeline} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
