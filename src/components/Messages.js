import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChatRoomMessages } from "../actions/messages";

class Messages extends Component {

  // componentWillReceiveProps(nextProps){
  //
  // }

  fetchMessages(props){
    if (props.currentUser.id){
      props.getChatRoomMessages(props.roomID, props.currentUser.id)
    }
  }
  componentDidMount(){
    this.interval = setInterval(()=>{this.fetchMessages(this.props)}, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
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
    currentUser: state.users.currentUser,
  }
}

export default connect(mapStateToProps, { getChatRoomMessages })(Messages)
