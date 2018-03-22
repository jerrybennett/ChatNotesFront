import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatContainer from './components/ChatContainer'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import ChatRooms from './components/ChatRooms'
import Chatroom from './components/Chatroom'
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route path={`/chatroom/:id`} component={Chatroom}/>
          {/* <Route exact path='/chats' component={ChatContainer} /> */}
          <Route path='/chats' component={ChatRooms} />
        </Switch>
      </div>
    );
  }
}

export default App;
