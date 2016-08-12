import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Header extends Component {
  renderLinks() {
    if (this.props.isAuthed) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      );
    } else {
      return [
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signin">Sign in</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
      ];
    }
  }
  render() {
    const authLink = (isAuthed) => {

    };

    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
            {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthed: state.auth.isAuthed
  };
}

export default connect(mapStateToProps)(Header);
