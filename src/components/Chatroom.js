import React, { Component } from 'react'
// import AddMessage from './AddMessage'
// import Messages from './Messages'
import AddNote from './AddNote'
import Notes from './Notes'
import ChatContainer from './ChatContainer'
import NoteContainer from './NoteContainer'
import { connect } from 'react-redux'
import { getChatRoomMessages } from "../actions/messages";
import {Route, Switch, Redirect} from 'react-router-dom'

class ChatRoom extends React.Component {

  render () {
    let roomID = parseInt(this.props.match.params.id)

    return (
      <div>
        <div className="row">
          <div className="col">
            <ChatContainer roomID={ roomID } />
          </div>
          <div className="col">
            <AddNote roomID={ roomID } />
            <Notes roomID={ roomID } />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom
