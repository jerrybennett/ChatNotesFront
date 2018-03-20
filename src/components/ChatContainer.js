import React, { Component } from 'react'
import Message from './Message'
import Messages from './Messages'
import ChatRoom from './Chatroom'


class ChatContainer extends React.Component {
  render () {
    return (
      <div>
        <ChatRoom />
      </div>
    );
  }
}

export default ChatContainer;
