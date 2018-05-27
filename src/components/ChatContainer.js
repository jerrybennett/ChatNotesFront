import React, { Component } from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'

class ChatContainer extends React.Component {

  roomName = () => {
    let rm = this.props.chatrooms.find(r => r.id === this.props.roomID)
      return (
        <h3>{rm.name}</h3>
      )
    }

  render () {
    console.log(this.props)
    // console.log(this.roomName().props.children)
    return (
      <div>
        <div className="container" >
          {this.roomName()}
          <Messages roomID={ this.props.roomID } />
        </div>
        <footer>
          <AddMessage roomID={ this.props.roomID } />
        </footer>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    chatrooms: state.chatrooms.chatrooms,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, null)(ChatContainer);
