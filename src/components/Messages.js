import React, { Component } from 'react'
import { connect } from 'react-redux'
// import AddMessage from './AddMessage'
import { fetchMessages } from "../actions/messages";

class Messages extends Component {

  componentDidMount(){
    this.props.fetchMessages()
  }

  render() {
    console.log(this.props)
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
