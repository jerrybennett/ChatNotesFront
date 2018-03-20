import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatContainer from './components/ChatContainer'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import AllChatRooms from './components/AllChatRooms'
import { Route, Redirect, Switch } from 'react-router-dom'
// import LogIn from'./components/LogIn'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/chatroom/:id' />
          <Route exact path='/chats' component={ChatContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
