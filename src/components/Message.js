import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from "../actions/messages"

class Message extends Component {

  state = {
    message: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSend = (e) => {
    console.log("submitting message", this.state)
    e.preventDefault()
    this.props.addMessage(this.state.message)
    this.setState({
      message: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSend}>
        <input type="text" name="message" value={this.state.message} onChange={this.handleInput} />
        <input type="submit" name="submit" />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, { addMessage })(Message);
