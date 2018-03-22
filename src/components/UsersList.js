import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoomUsers } from "../actions/messages";

class UsersList extends Component {

  componentDidMount(){
    this.props.getChatRoomUsers(this.props.roomID)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.messages.map(m => {
            return <div key={m.id}>{m.text}</div>
          }
      )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps, { getChatRoomUsers })(UsersList)
