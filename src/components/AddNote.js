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

  // handleBlur = () => {
  //   this.props.addNote(this.state.title, this.state.text, this.props.roomID, this.props.currentUser.id)
  //   this.setState({
  //     title: '',
  //     text: ''
  //   })
  // }

  render () {
    console.log(this.props.currentUser)
    return (
      <div className="tile">
      <form onSubmit={this.handleSend}>
        <input className="input" type="text" name="title" placeholder="Enter a Title" value={this.state.title} onChange={this.handleInput} />
        <textarea className="input" type="textarea" name="text" placeholder="Make a Note!" value={this.state.text} onChange={this.handleInput} />
        <input type="submit" name="submit" value="Save Note" />
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
