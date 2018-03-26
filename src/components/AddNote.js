import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from "../actions/messages"

class AddNote extends Component {

  state = {
    title: '',
    text: ''
  }

  handleInput = (e) => {
    // console.log(this.state.message)
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

  render () {
    console.log(this.props.currentUser)
    return (
      <form onSubmit={this.handleSend}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleInput} />
        <input type="text" name="text" value={this.state.text} onChange={this.handleInput} />
        <input type="submit" name="submit" />
      </form>
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
