import React, { Component } from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'
import AddNote from './AddNote'
import Notes from './Notes'
import { connect } from 'react-redux'
import { getChatRoomMessages } from "../actions/messages";
import {Route, Switch, Redirect} from 'react-router-dom'
import UsersList from './UsersList'

class ChatRoom extends React.Component {

  // componentDidMount() {
  //   // this.props.fetchChatrooms()
  //   // this.props.getChatRoomMessages()
  //   // dispatch some action to fetch based on the id
  // }

  render () {
    let roomID = parseInt(this.props.match.params.id)
    // console.log(this.props.match.params)
    // console.log(this.props.chatrooms)
    // console.log('Chatroom', this.props)
    // if i know the id you can fetch based on id


    // pass down the chat mesages to the messages component
    return (
      <div>
        <AddMessage  roomID={ roomID } />
        <Messages roomID={ roomID } />
        <AddNote roomID={ roomID } />
        <Notes roomID={ roomID } />
      </div>
    );
  }
}

export default ChatRoom
