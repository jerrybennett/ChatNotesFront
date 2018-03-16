import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatContainer from './components/ChatContainer'
import NavBar from './components/NavBar'
import LogIn from'./components/LogIn'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <ChatContainer />
      </div>
    );
  }
}

export default App;
