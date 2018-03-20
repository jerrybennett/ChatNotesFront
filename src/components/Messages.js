import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Message from './Message'
import { fetchMessages } from "../actions/messages";

class Messages extends Component {
  //
  // componentWillMount(){
  //   fetch('http://localhost:3000/api/v1/messages')
  //   .then(res => res.json())
  //   .then(messages => {
  //     this.setState({
  //       messages: messages
  //     })
  //   }).then(console.log)
  //   // this.props.fetchMessages();
  // }

  componentDidMount(){
    this.props.fetchMessages()
  }

  render() {
    return (
      <div>
        {this.props.messages.map(m => <div>{m.text}</div>)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    messages: state.messages.messages
  }
}

export default connect(mapStateToProps, {fetchMessages})(Messages)
