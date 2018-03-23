import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatContainer from './components/ChatContainer'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import ChatRooms from './components/ChatRooms'
import Chatroom from './components/Chatroom'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { getCurrentUser } from "./actions/messages";
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    let id = localStorage.getItem("user_id")

    if (id){
      this.props.getCurrentUser(id)
    }
  }

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

function mapStateToProps(state){
  return {
    currentUser: state.users.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
