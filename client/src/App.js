// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Plan from './components/Plan.js';
import Dinner from './components/Dinner.js';
import Drinks from './components/Drinks.js';
import Event from './components/Event.js';
import SingleDrinks from './components/SingleDrinks.js'
import SingleEvent from './components/SingleEvent.js'
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
            <Route exact path="/drinks" component={Drinks} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/event/:eventId" component={SingleEvent} />
            <Route exact path="/drinks/:drinksId" component={SingleDrinks} />
            <Route exact path="/dinner/:dinnerId" component={SingleDinner} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;