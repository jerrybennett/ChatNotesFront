import React, { Component } from 'react'
import Message from './Message'
import Messages from './Messages'
import ChatRoom from './Chatroom'
import AllChatRooms from './AllChatRooms'


class ChatContainer extends React.Component {
  render () {
    return (
      <div>
        <h3>All ChatRooms</h3>
        <AllChatRooms />
        <h3>This is a ChatRoom</h3>
        <ChatRoom />
      </div>
    );
  }
}

export default ChatContainer;
