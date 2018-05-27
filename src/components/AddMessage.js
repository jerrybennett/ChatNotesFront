import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from "../actions/messages"

class AddMessage extends Component {

  state = {
    message: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSend = (e) => {
    e.preventDefault()
    this.props.addMessage(this.state.message, this.props.roomID, this.props.currentUser.id)
    this.setState({
      message: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSend}>
        <input type="text" name="message" value={this.state.message} onChange={this.handleInput} />
        <button type="submit" name="submit" className="sndBtn">Send</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, { addMessage })(AddMessage);
