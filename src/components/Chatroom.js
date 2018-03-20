import React, { Component } from 'react'
import Message from './Message'
import Messages from './Messages'


class ChatRoom extends React.Component {
  render () {
    return (
      <div>
        <Messages />
      </div>
    );
  }
}

export default ChatRoom;
