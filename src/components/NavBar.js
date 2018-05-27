import React, { Component } from 'react';
import {Route, Switch, Redirect, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  navItems = () => {
    if(this.props.location.pathname === '/') {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <a  id="logoFont" className="navabar-brand" href="/">ChatNotes</a>
        </nav>
      )
    } else {
      return (
        <nav className="navbar navbar-dark bg-dark">
          <a id="logoFont" className="navabar-brand">ChatNotes</a>
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link" href="/chats">Home</a>
          </div>
          <div id="home" className="navbar-nav">
            <a className="nav-item nav-link" href="/">Log Out</a>
          </div>
        </nav>
      )
    }
  }


  render() {

    console.log(this.props.location.pathname)

    return (
      <div id="navMargin">
      {this.navItems()}
      </div>
    );
  }
}

export default withRouter(NavBar)


// <nav className="navbar navbar-dark bg-dark">
//   <a className="navabar-brand" href="/">ChatNotes</a>
//   <div className="navbar-nav ml-auto">
//     <a className="nav-item nav-link" href="#">Login</a>
//   </div>
//   <div className="navbar-nav">
//     <a className="nav-item nav-link" href="/chats">Home</a>
//   </div>
// </nav>
