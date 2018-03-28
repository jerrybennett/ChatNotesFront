import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes, clearMessages, deleteNote } from "../actions/messages";

class Notes extends Component {

  componentWillReceiveProps(nextProps){
    if (nextProps.currentUser.id && !nextProps.retrieved){
        nextProps.fetchNotes(nextProps.currentUser.id)
      }
  }

  componentWillUnmount(){
    this.props.clearMessages()
  }

  handleDelete = (e) => {
    // console.log(e.target.parentNode.parentNode.parentNode.id)
    this.props.deleteNote(e.target.parentNode.parentNode.parentNode.id)
    this.props.fetchNotes(this.props.currentUser.id)
  }

  userNotes = () => {
    return this.props.notes.map(n => {
      let timeStamp = new Date(n.created_at)
      if(n.user.id === this.props.currentUser.id) {
        return(
          <div id={n.id} className="tile" key={n.id}>
            <span>
              <button onClick={this.handleDelete} type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </span>

            <p class="font-weight-bold">{n.title}</p>
            <p>{n.text}</p>
            <p>from chatroom: {n.chat_room.name} on {timeStamp.getMonth()}/{timeStamp.getDate()} at {`${timeStamp.getHours()}:${timeStamp.getMinutes()}`}</p>
          </div>
        )
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="notesDivs">
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
