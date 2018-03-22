import React, { Component } from 'react'
import ChatRoomsList from './ChatRoomsList'
import AddChatRoom from './AddChatRoom'

class ChatRooms extends React.Component {
  render () {
    return (
      <div>
        <h3>All Chat Rooms</h3>
        <AddChatRoom />
        <ChatRoomsList />
      </div>
    );
  }
}

export default ChatRooms;
