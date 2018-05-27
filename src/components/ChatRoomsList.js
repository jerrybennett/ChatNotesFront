import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchChatrooms } from "../actions/messages";
import { Link } from 'react-router-dom'
import Chatroom from './Chatroom'

class ChatRoomsList extends Component {

  componentDidMount() {
    this.props.fetchChatrooms()
  }

  // handleDelete = (e) => {
  //   console.log(e.target.parentNode.firstChild.id)
  //   this.props.deleteChatRoom(e.target.parentNode.firstChild.id)
  // }

  render() {
    console.log(this.props)
    return (
      <div className="chatList">
        {this.props.chatrooms.map(rm =>
          <Link className="text-justify"
            to={`/chatroom/${rm.id}`}
            id={rm.id}
            key={rm.id}
            rminfo={this.props.rm}

          >
            <p>{rm.id}) {rm.name}</p>
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

export default connect(mapStateToProps, { fetchChatrooms })(ChatRoomsList)
