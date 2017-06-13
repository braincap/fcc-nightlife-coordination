import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

  

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className='user'>
          <div className='text'>
            <h2>Hi, {localStorage.getItem('displayName')}</h2>
            <Link className='auth-links' to='/signout'>Sign out</Link>
          </div>
          <img className='photo' alt='User' src={localStorage.getItem('photo')} />
        </div>
      )
    } else {
      return (
        <div className='user'>
          <div className='text'>
            <h2>Hello Guest</h2>
            <a className='auth-links' href={`/api/signin/twitter?location=${this.props.searchText}`} > Sign in with twitter</a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='header'>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    searchText: state.auth.searchText
  }
}

export default connect(mapStateToProps)(Header);