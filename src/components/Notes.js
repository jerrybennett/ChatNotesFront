import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes, clearMessages, deleteNote } from "../actions/messages";

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

  handleDelete = (e) => {
    console.log(e.target.parentNode.id)
    this.props.deleteNote(e.target.parentNode.id)
    this.props.fetchNotes(this.props.currentUser.id)
  }

  userNotes = () => {
    return this.props.notes.map(n => {
      if(n.user.id === this.props.currentUser.id) {
        return(
          <div id={n.id} className="tile" key={n.id}>
            <p onClick={this.handleDelete}>x</p>
            <p class="font-weight-bold">{n.title}</p>
            <p>{n.text}</p>
            <p>from chatroom: {n.chat_room.name}</p>
          </div>
        )
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Notes</h3>
        {this.userNotes()}
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

export default connect(mapStateToProps, { fetchNotes, clearMessages, deleteNote })(Notes)
