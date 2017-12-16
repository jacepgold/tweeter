import React, { Component } from 'react';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Flash from './components/Flash';
import Home from './components/Home';
import Profile from './components/Profile';
import Newpost from './components/Newpost';
import ProtectedRoute from './components/ProtectedRoute';
import AuthRoute from './components/AuthRoute';
import FetchUser from './components/FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/Login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
            <AuthRoute path='./newpost' component={Newpost} />

            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
