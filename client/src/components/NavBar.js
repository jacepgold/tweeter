import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import Login from './Login'

class NavBar extends Component {

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Dropdown text='My Profile' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item><Link to={`/EditProfile/${user.id}`}>Edit Profile</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to='/newtweet'>
            <Menu.Item name='Newtweet' />
          </Link>
          <Link to='/mytweets'>
          <Menu.Item name='my tweets' />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />

        </Menu.Menu>

      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>

        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
        </Menu.Menu>
    );
  }

  leftNavs = () => {
    const { user } = this.props;
    if (user.id) {
      return(
        <div>
          <Menu pointing secondary>
            <Link to='/'>
              <Menu.Item name='tweeter' />
            </Link>
            <Link to='/profile'>
              <Menu.Item name='Account name here' />
            </Link>
            {this.rightNavs()}
          </Menu>
        </div>
      );
    } else {
      return(
        <div>
          <Menu pointing secondary>
            <Link to='/'>
              <Menu.Item name='tweeter' />
            </Link>
            {this.rightNavs()}
          </Menu>
        </div>
      );
    }
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='tweeter' />
          </Link>
          <Link to='/profile'>
            <Menu.Item name='Your profile' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
=======
      this.leftNavs()
    )
>>>>>>> master
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
