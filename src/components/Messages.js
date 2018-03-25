import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoomMessages } from "../actions/messages";

class Messages extends Component {

  componentDidMount(){
    this.props.getChatRoomMessages(this.props.roomID, this.props.currentUser.id)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.messages.map(m => {
            return(
              <div key={m.id}>
                {m.text}
              </div>
            )
          }
      )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    messages: state.messages.messages,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, { getChatRoomMessages })(Messages)
