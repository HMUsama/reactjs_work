import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import CreateProject from './components/projects/CreateProject'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>
            <Route exact path="/dashbord" component={Dashboard}/>
            <Route exact path="/home" component={CreateProject}/>
            <Route exact path="/signin"   component={SignIn}/>
            <Route exact path="/signup"   component={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
