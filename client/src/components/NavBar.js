import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Dropdown text='My Profile' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/EditProfile">Edit Profile</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='tweeter' />
          </Link>
          <Link to='/profile'>
            <Menu.Item name='Account name here' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));