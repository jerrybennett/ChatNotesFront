import React, { Component } from 'react'
// import AddMessage from './AddMessage'
// import Messages from './Messages'
import AddNote from './AddNote'
import Notes from './Notes'
import ChatContainer from './ChatContainer'
import NoteContainer from './NoteContainer'
import { connect } from 'react-redux'
// import { getChatRoomMessages } from "../actions/messages";
import {Route, Switch, Redirect} from 'react-router-dom'

class ChatRoom extends Component {

  render () {
    let roomID = parseInt(this.props.match.params.id)

    console.log(this.props)

    return (
      <div id={roomID}>
        <div className="row">
          <div className="col">
            <ChatContainer roomID={ roomID } />
          </div>
          <div className="col">
            <AddNote id="addNoteMargin" roomID={ roomID } />
            <Notes roomID={ roomID } />
          </div>
        </div>
      </div>
    );
  }
}

// export default ChatRoom
function mapStateToProps(state){
  return {
    chatrooms: state.chatrooms.chatrooms,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, null)(ChatRoom);
