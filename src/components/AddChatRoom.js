import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addChatRoom } from "../actions/messages"

class AddChatRoom extends Component {

  state = {
    name: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSend = (e) => {
    console.log("submitting message", this.state)
    e.preventDefault()
    this.props.addChatRoom(this.state.name)
    this.setState({
      name: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSend}>
        <input type="text" name="name" placeholder="Add a chat" value={this.state.name} onChange={this.handleInput} />
        <button className="sndBtn" type="submit" name="submit" >Create</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.name,
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps, { addChatRoom })(AddChatRoom);
