import React, {Component} from 'react';
import Login from './components/Login'
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainPage from './components/MainPage';
import Moviedetail from './components/Moviedetail'

class App extends Component {
  render() {
    console.log("appjs")
    return (
      <Router>
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="Login" />
            <Route path='/login' exact component={Login} />
            <Route path='/index' component={MainPage} />
            <Route path='/detail' exact component={Moviedetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;