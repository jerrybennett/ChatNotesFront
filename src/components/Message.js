import React, { Component } from 'react'
import { connect } from "react-redux";
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
    this.props.addMessage(this.state)
    fetch(`http://localhost:3000/api/v1/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.message,
        user_id: 1,
        chat_room_id: 1
      })
    }).then(res => res.json()).then(res => console.log(res))

    // user_id: localStorage.getItem('user_id'),
    // chat_room_id: this.props.currentChatRoom.id

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
  };

}

export default connect(mapStateToProps, { addMessage })(Message);
