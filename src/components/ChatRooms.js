import React, { Component } from 'react'
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
            <AddChatRoom />
            <ChatRoomsList />
          </div>
          <div className="col">
            <Notes />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRooms;
