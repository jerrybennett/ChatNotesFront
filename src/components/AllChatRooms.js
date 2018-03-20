import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchChatrooms } from "../actions/messages";

class AllChatRooms extends Component {

  componentDidMount(){
    this.props.fetchChatrooms()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.chat_rooms.map(rm =>
          <div>
            <a href="#">{rm.name}</a>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    chat_rooms: state.messages.chat_rooms
  }
}

export default connect(mapStateToProps, {fetchChatrooms})(AllChatRooms)
