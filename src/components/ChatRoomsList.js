import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchChatrooms } from "../actions/messages";
import { Link } from 'react-router-dom'
import Chatroom from './Chatroom'

class ChatRoomsList extends Component {

  componentDidMount() {
    this.props.fetchChatrooms()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.chatrooms.map(rm =>
          <Link
            to={`/chatroom/${rm.id}`}
            id={rm.id}
            key={rm.id}
            rmInfo={this.props.rm}

          >
            <p>{rm.name}</p>
          </Link>
        )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    chatrooms: state.chatrooms.chatrooms
  }
}

export default connect(mapStateToProps, {fetchChatrooms})(ChatRoomsList)
