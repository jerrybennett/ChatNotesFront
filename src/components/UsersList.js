import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoomUsers } from "../actions/messages";

class UsersList extends Component {

  componentDidMount(){
    this.props.getChatRoomUsers(this.props.roomID)
  }

  userList = () => {
      if(!this.props.users) {
        let cu = this.props.currentUser
        return (<div key={cu.id}>{cu.username}</div>)
      } else {
        this.props.users.map(u =>
            <div key={u.id}>{u.username}</div>
          )
    }
  }

  render() {
    console.log(this.props)
    console.log(this.userList)
    return (
      <div>
        {this.props.userList}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users.users,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, { getChatRoomUsers })(UsersList)
