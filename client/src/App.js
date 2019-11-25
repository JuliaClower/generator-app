// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Plan from './components/Plan.js';
import Dinner from './components/Dinner.js';
import SingleDinner from './components/SingleDinner.js'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Plan} />
            <Route exact path="/dinner" component={Dinner} />
            <Route exact path="/dinner/:dinnerId" component={SingleDinner} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;