import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from './Message'

class Messages extends Component {

  state = {
    messages: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/messages')
    .then(res => res.json())
    .then(messages => {
      this.setState({
        messages: messages
      })
    }).then(console.log)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.messages.map(m => <div>{m.text}</div>)}
        <Message />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Messages)
