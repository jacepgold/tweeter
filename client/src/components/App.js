import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Profile from './Profile'
import Newtweet from './Newtweet'
import Mytweets from './Mytweets'
import EditProfile from './EditProfile';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/newtweet' component={Newtweet} />
            <ProtectedRoute exact path='/mytweets' component={Mytweets} />
            <ProtectedRoute path='/profile/edit' component={EditProfile} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
