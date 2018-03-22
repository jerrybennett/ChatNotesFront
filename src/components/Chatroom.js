import React, { Component } from 'react'
import AddMessage from './AddMessage'
import Messages from './Messages'


class ChatRoom extends React.Component {
  componentDidMount() {
    // this.props.fetchChatrooms()
    // dispatch some action to fetch based on the id
  }
  render () {
    console.log(this.props.match.params.id)
    // if i know the id you can fetch based on id


    // pass down the chat mesages to the messages component
    return (
      <div>
        {/* Rename Message */}
        <AddMessage />
        <Messages />
      </div>
    );
  }
}

// connect ChatRoom to redux

export default ChatRoom;

// function mapStateToProps(state){
//   return {
//     chatrooms: state.chatrooms.chatrooms
//   }
// }
//
// export default connect(mapStateToProps, {fetchChatrooms})(ChatRoom)
