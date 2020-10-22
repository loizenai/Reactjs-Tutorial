import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './CustomerList';
import CustomerEdit from './CustomerEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/customers' exact={true} component={CustomerList}/>
          <Route path='/customers/:id' component={CustomerEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;