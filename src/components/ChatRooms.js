import React, { Component } from 'react'
import ChatRoomsList from './ChatRoomsList'
import AddChatRoom from './AddChatRoom'
import Notes from './Notes'

class ChatRooms extends React.Component {
  render () {
    return (
      <div>
        <h3>All Chat Rooms</h3>
        <AddChatRoom />
        <ChatRoomsList />
        <Notes />
      </div>
    );
  }
}

export default ChatRooms;
