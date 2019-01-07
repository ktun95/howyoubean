import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import { Login } from './login';
import Game from './game';

class Main extends Component {
  render() {
    return (
      <Route exact path='/' component={Game}/>
      // <Game />
    )
  }
}

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('app')
);