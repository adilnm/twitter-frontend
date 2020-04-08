import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import AddTweet from './AddTweet';


export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddTweet} />
          </div>
        </Router>
    )
  }
}

