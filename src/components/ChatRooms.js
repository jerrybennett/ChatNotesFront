import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatRoomsList from './ChatRoomsList'
import AddChatRoom from './AddChatRoom'
import Notes from './Notes'

class ChatRooms extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Chat Rooms</h3>
            <AddChatRoom chatProps={this.props.chatrooms} />
            <ChatRoomsList chatProps={this.props.chatrooms}/>
          </div>
          <div className="col">
            <Notes />
          </div>
        </div>
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

export default connect(mapStateToProps, null)(ChatRooms);
