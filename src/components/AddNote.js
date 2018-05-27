import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from "../actions/messages"

class AddNote extends Component {

  state = {
    title: '',
    text: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSend = (e) => {
    // console.log("submitting message", this.state)
    e.preventDefault()
    this.props.addNote(this.state.title, this.state.text, this.props.roomID, this.props.currentUser.id)
    this.setState({
      title: '',
      text: ''
    })
  }

  // handleBlur = () => {
  //   this.props.addNote(this.state.title, this.state.text, this.props.roomID, this.props.currentUser.id)
  //   this.setState({
  //     title: '',
  //     text: ''
  //   })
  // }

  render () {
    // console.log(this.props.currentUser)
    return (
      <div className="container">
        <form onSubmit={this.handleSend}>
          <div className="form-group notesForm">
            <input className="input form-control" type="text" name="title" placeholder="Note Title" value={this.state.title} onChange={this.handleInput} />
            <textarea className="input form-control" type="textarea" name="text" placeholder="Take a Note!" value={this.state.text} onChange={this.handleInput} />
          </div>
          <button className="sndBtn" type="submit" name="submit">Save Note</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    note: state.note,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, { addNote })(AddNote);
