import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes, clearMessages } from "../actions/messages";

class Notes extends Component {

  // componentDidMount() {
  //   this.props.fetchNotes(this.props.currentUser.id)
  // }

  componentWillReceiveProps(nextProps){
    if (nextProps.currentUser.id && !nextProps.retrieved){
        nextProps.fetchNotes(nextProps.currentUser.id)
      }
  }

  componentWillUnmount(){
    this.props.clearMessages()
  }

  // componentWillReceiveProps(nextProps){
  //   if (nextProps.currentUser.id && !nextProps.recieved){
  //     nextProps.getChatRoomNotes(nextProps.roomID, nextProps.currentUser.id)
  //   }
  // }
  //
  // fetchNotes(props){
  //   if (props.currentUser.id){
  //     props.getChatRoomMessages(props.roomID, props.currentUser.id)
  //   }
  // }
  // componentDidMount(){
  //   this.interval = setInterval(()=>{this.fetchNotes(this.props)}, 1000)
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this.interval)
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>All Notes</h3>
        {this.props.notes.map(n => {
            return(
              <div key={n.id}>
                <h4>{n.title}</h4>
                <p>{n.text}</p>
                <p>from chatroom: {n.chat_room.name}</p>
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
    notes: state.messages.notes,
    currentUser: state.users.currentUser,
    retrieved: state.messages.retrieved
  }
}

export default connect(mapStateToProps, { fetchNotes, clearMessages })(Notes)
